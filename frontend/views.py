from django.template import loader
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    context = {'blanket': "test"}
    return render(request,'frontend/templates/frontend/starting.html', context)
