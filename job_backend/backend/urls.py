from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/',TokenObtainPairView.as_view()),
    path('api/token/refresh',TokenRefreshView.as_view()),
    path('api/token/verify',TokenVerifyView.as_view()),
    path('api/user/',include('apps.accounts.urls')),
    path('api/user/',include('apps.profiles.urls'))
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
    