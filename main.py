from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

app = FastAPI(
    title="M3DP Filament Recommendation Engine",
    description="Web-based tool to help select the best FDM 3D printing filament for your project needs",
    version="1.6.0"
)

# Mount static files (if we had any, currently everything is in the CSV or CDN, but good practice)
# We don't have a 'static' dir yet, so we can comment this out or create it.
# app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    """
    Renders the main page with the ecosystem menu data.
    """
    context = {
        "request": request,
        "menu_items": [
            {"label": "Home", "url": "https://calc.minimal3dp.com/home"},
            {"label": "Calculators", "url": "https://calc.minimal3dp.com/calculators-ui"},
            {"label": "Minimal 3DP", "url": "https://minimal3dp.com"},
            {"label": "YouTube", "url": "https://www.youtube.com/@minimal3dp"},
            {"label": "Filament DB", "url": "/", "active": True},
            {"label": "Settings", "url": "https://settings.minimal3dp.com"},
        ]
    }
    return templates.TemplateResponse("index.html", context)
