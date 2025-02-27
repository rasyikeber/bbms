
from mainapp import create_app
from mainapp.config import DevConfig

app = create_app(DevConfig)

if __name__ == "__main__":
    app.run()