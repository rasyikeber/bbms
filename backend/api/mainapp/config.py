from decouple import config
import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

class Config:
    SECRET_KEY = config('SECRET_KEY', default='hjlkejgkefq eioqirjefhertyr')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)
    JWT_SECRET_KEY = config('JWT_SECRET_KEY')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)  # Token expiration setting
    UPLOAD_FOLDER = os.path.join(BASE_DIR, 'front-end', 'public')
    
class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///bbms.db'
    DEBUG = True
    SQLALCHEMY_ECHO = True