from django.urls import path 
from .views import *
urlpatterns = [
    # path('',userActions),
    path('create/',createUser),
    path('validate',validateEmail)
]
