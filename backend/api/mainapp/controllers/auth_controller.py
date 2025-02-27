from flask_restx import Resource, Namespace, fields


from mainapp.model_access.auth import signup_user,login_user

from flask import request, jsonify, make_response

from flask_jwt_extended import (create_access_token, get_jwt_identity,jwt_required)


auth = Namespace("auth", description="User Authentication")


signup_model = auth.model(
    "SignUp",
    {
        "user_id": fields.Integer(),
        "full_name": fields.String(required=True, description="User's username"),
        "email": fields.String(required=True, description="User's email"),
        "password": fields.String(required=True, description="User's password"),

        "role": fields.String(required=True, description="user role eg. staff and guest"),
        "phone_number": fields.String(description="User's phone number"),
        "pic_url": fields.String(description="User's profile picture URL"),
        "created_at": fields.DateTime(),
        "updated_at": fields.DateTime(),
    },
)

login_model = auth.model(
    "Login",
    {
        "email": fields.String(required=True, description="User's email"),
        "password": fields.String(required=True, description="User's password")
    }
)

@auth.route('/signup')
class SignUp(Resource):
    @auth.expect(signup_model)
    def post(self):
        """Signing up user"""
        data = request.get_json()
        print("the data", data)
        
        
        response, status_code = signup_user(data)

        # Handle response based on the status code
        if status_code == 201:
            return make_response(jsonify(response), status_code)
        else:
            # Here we handle the error response
            return make_response(jsonify({"message": response}), status_code)
                
     
        



@auth.route('/login')
class Login(Resource):
    @auth.expect(login_model)
    def post(self):
        print("hello")
        """user login"""
        data = request.get_json()
        response, status_code = login_user(data)
        # print(response)
        return make_response(jsonify(response), status_code)


@auth.route("/refresh")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):
        """refresh token"""
        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)
    