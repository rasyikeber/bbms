from flask import Flask
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS



db = SQLAlchemy()

from mainapp.models import (User)

from mainapp.controllers.auth_controller import auth as auth_ns


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    CORS(app)
    db.init_app(app)
    migrate = Migrate(app, db)
    JWTManager(app)

    api = Api(app, doc="/docs", version='1.0', title='Blood Bank Managment System API', description='Blood bank Mgt System Api V1')
    api.add_namespace(auth_ns, path='/auth')
    

    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "User": User
        }

    return app