from django.urls import path 
from .views import *

urlpatterns = [
    path('profile',userProfileView),
    path('contact',contactView),
    path('website',websiteView),
    path('skill',setSkill),
]
