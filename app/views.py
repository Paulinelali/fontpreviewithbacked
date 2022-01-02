from django.shortcuts import render
from .models import html_font, html_color, html_shadows
# Create your views here.


def index(request):
    font = html_font.objects.all()
    fcolor = html_color.objects.all()
    shadow = html_shadows.objects.all()
    return render(request, 'index.html', {'font':font, 'shadow':shadow, 'fcolor':fcolor})