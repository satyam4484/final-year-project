from django.urls import path 
from .views import *

urlpatterns = [
    path('profile',userProfileView),
    path('contact',contactView),
    path('website',websiteView),
    path('skill',setSkill),
    path('skill/<int:id>',setSkill),
    path('education',educationView),
    path('education/<int:id>',educationView),
    path('experience',experienceView),
    path('experience/<int:id>',experienceView)
]
