from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
from apps.profiles.models import *
from ckeditor.fields import RichTextField
# Create your models here. 
class organization(models.Model):
    company = models.OneToOneField(User,on_delete=models.CASCADE)
    companyName = models.CharField(max_length = 300,default="company")
    companyLogo = models.ImageField(upload_to='organization/',default='defaultProfile.jpg')
    companyCover = models.ImageField(upload_to='organization/',default='cover.png')
    website = models.URLField()
    industry = models.CharField(max_length = 200)
    specialties = models.CharField(max_length = 300)

    def __str__(self):
        return self.companyName


# end date changes to be done with experience form to be completed by tommorow
class job(models.Model):
    role = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    jobType = models.CharField(max_length=20)
    description = RichTextField()
    skillSet = models.ManyToManyField(skill)
    company = models.ForeignKey(organization,on_delete=models.CASCADE)
    usersApplied = models.ManyToManyField(userProfile,blank=True,null=True) 

    def __str__(self):
        return f'{self.role} in {self.company}'
    
