
from mainapp import db
from flask import abort
from sqlalchemy import Column, Integer, String, Float, Date, Boolean, Enum, ForeignKey, DateTime,UniqueConstraint, func
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
import enum
from werkzeug.security import generate_password_hash, check_password_hash

# Enums for enum values
class UserRole(enum.Enum):
    guest = "Guest"
    staff = "Staff"
    admin = "Admin"




class User(db.Model):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, autoincrement =True)
    full_name = Column(String(100), unique=True, nullable=False)
    phone_number = Column(String(20))
    email = Column(String(80), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role = Column(Enum(UserRole), nullable=False)
    pic_url = Column(String(255),nullable=True,default=None)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f"<User {self.full_name} >"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
   
