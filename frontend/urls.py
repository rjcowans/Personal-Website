from django.urls import path
from django.conf import settings
from django.contrib.staticfiles import views
from django.urls import re_path
from . import views as view2

urlpatterns = [
    path('',view2.index, name='index'),
]

if settings.DEBUG:
    urlpatterns += [
        re_path(r'^static/(?P<path>.*)$', views.serve),
    ]