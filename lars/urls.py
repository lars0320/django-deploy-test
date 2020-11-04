"""lars URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from main.views import ProfileView, ResumeView, BlogView, IndexView, WeatherView, TwentyView, AdvencherView, JirungiView
from main.views import RuletView, HighAndLowView, CounterView, TestView
from django.views.generic import TemplateView


urlpatterns = [
    path('', ProfileView.as_view()),
    path('resume/', ResumeView.as_view()),
    path('blog/', BlogView.as_view()),
    path('blog/weather/', WeatherView.as_view()),
    path('blog/2020/', TwentyView.as_view()),
    path('index/', IndexView.as_view()),
    path('index/rulet/', RuletView.as_view()),
    path('index/highandlow/', HighAndLowView.as_view()),
    path('index/counter/', CounterView.as_view()),
    path('index/jirungi/', JirungiView.as_view()),
    path('index/advencher/', AdvencherView.as_view()),
    path('admin/', admin.site.urls),
    path('test/', TestView.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
