from django.contrib import admin
from .models import organization

# Register your models here.

@admin.register(organization)
class organizationAdmin(admin.ModelAdmin):
    list_display = ['id','company','companyName','companyLogo','companyCover','website','industry','specialties']
    
