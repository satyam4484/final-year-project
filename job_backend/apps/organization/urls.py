from django.urls import path 
from .views import *

urlpatterns = [
    path('',organizationView),
    path('<int:id>',organizationView),
    path('jobs',jobView),
    path('jobs/<int:id>/',jobView),
]
