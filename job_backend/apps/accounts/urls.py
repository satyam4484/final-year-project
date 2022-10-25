from django.urls import path 
from .views import *
urlpatterns = [
    path('',getUser),
    path('create/',createUser),
    path('validate',validateEmail)
]
