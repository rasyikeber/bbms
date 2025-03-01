
from flask import jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (create_access_token,create_refresh_token)
from sqlalchemy.exc import IntegrityError



from mainapp import db
from mainapp.models import User


def signup_user(data):
    # Check if the user already exists
    email = data.get('email')
    db_user = User.query.filter_by(email=email).first()
    if db_user:
        return "User already exists! Please login or reset password", 409

    # Create a new user
    new_user = User(
        full_name=data.get("full_name"),
        email=email,
        password=generate_password_hash(data.get('password')),
        role=data.get('role'),
        phone_number=data.get('phone_number')
    )
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return {
            "full_name": new_user.full_name,
            "message": "User created successfully"
        }, 201
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"message": "User already exists, please try a different username or email"}), 409




def login_user(data):
    db_user = User.query.filter_by(email=data['email']).first()
    
    if db_user and check_password_hash(db_user.password, data['password']):
        access_token = create_access_token(identity=db_user.user_id)
        refresh_token = create_refresh_token(identity=db_user.user_id)
        
        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "user": {
                "user_id": db_user.user_id,
                "full_name": db_user.full_name,
                "email": db_user.email,
                "role": db_user.role.name
            },
            "message": "Logged in Successfully!"
        }, 200
    return {"message": "Invalid full_name or password."}, 401