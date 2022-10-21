from email.policy import default
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
User = get_user_model()

class contact(models.Model):
    mobile = models.CharField(max_length=12,blank=True,null=True,unique=True)
    address=models.CharField(max_length=500)
    birthMonth = models.CharField(max_length=9,blank=True,null=True)
    birthDay = models.IntegerField(blank=True,null=True)
    country = models.CharField(max_length=50,blank=True,null=True)
    city = models.CharField(max_length=100,blank=True,null=True)

    def __str__(self):
        return self.mobile

class website(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500,blank=True,null=True)
    link = models.URLField(max_length=300)

    def __str__(self):
        return self.name

class skill(models.Model):
    name = models.CharField(max_length=30,default='Cpp')
    
    def __str__(self):
        return self.name

class commonProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    headline = models.CharField(max_length=500,blank=True,null=True)
    profilePic=models.ImageField(upload_to='profileimage/',default='defaultProfile.jpg')
    coverImage = models.ImageField(upload_to='coverImage/',default='cover.png')
    websites = models.ManyToManyField(website,related_name='websites',blank=True)

    def __str__(self):
        return self.user.email


class userProfile(models.Model):
    firstName = models.CharField(max_length=100,blank=True,null=True)
    lastName = models.CharField(max_length=100,blank=True,null=True)
    profile = models.OneToOneField(commonProfile,on_delete = models.CASCADE)
    contactDetails = models.OneToOneField(contact,on_delete=models.CASCADE,blank=True,null=True)
    skill = models.ManyToManyField(skill,related_name='userskills',blank=True)

    def __str__(self):
        return self.profile.user.email


class education(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    school=models.CharField(max_length=200)
    degree= models.CharField(max_length=100)
    fieldOfStudy = models.CharField(max_length=100)
    startdate = models.DateField()
    enddate = models.DateField()
    grade = models.CharField(max_length=4,blank=True,null=True)
    description = models.CharField(max_length=200,blank=True,null=True)
    
    

class experience(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    role = models.CharField(max_length=100)
    employementType=models.CharField(max_length=100)
    companyName = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    startdate = models.DateField()
    enddate = models.DateField()
    description = models.CharField(max_length=1000)

    def __str__(self):
        return self.role


class project(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    startdate = models.DateField()
    enddate = models.DateField()
    projectUrl = models.URLField()
    description = models.CharField(max_length=1000,blank=True,null=True)

