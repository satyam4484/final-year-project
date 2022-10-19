from django.db import models
from apps.profiles.models import commonProfile

# Create your models here.
class organization(models.Model):
    companyName = models.CharField(max_length = 300)
    profile = models.OneToOneField(commonProfile,on_delete = models.CASCADE)
    industry = models.CharField(max_length = 200)
    companySize=models.CharField(max_length = 100)
    specialties = models.CharField(max_length = 300)

    def __str__(self):
        return self.companyName
