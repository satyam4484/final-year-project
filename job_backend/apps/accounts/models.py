from email.policy import default
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import (BaseUserManager,AbstractBaseUser)

# creating custom user model

class UserManager(BaseUserManager):
    def create_user(self,email,password = None,**extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        
        user = self.model (
            email = self.normalize_email(email),
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password,**extra_fields):
        user = self.create_user(email,password=password,**extra_fields)
        user.isAdmin = True
        user.save(using = self._db)
        return user
                    

class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email',unique=True,max_length=255)
    isActive = models.BooleanField(default=True)
    isAdmin = models.BooleanField(default=False)
    usertype = models.IntegerField(default = 1)

    objects =  UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= []

    def __str__(self):
        return self.email

    def has_perm(self,perm,obj = None):
        return True
    
    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.isAdmin
