from django.shortcuts import render, redirect
from django import views

class ProfileView(views.View):
    def get(self, request):
        return render(request, 'profile.html')

class ResumeView(views.View):
    def get(self, request):
        return render(request, 'resume.html')

class BlogView(views.View):
    def get(self, request):
        return render(request, 'blog.html')

class IndexView(views.View):
    def get(self, request):
        return render(request, 'index.html')

class WeatherView(views.View):
    def get(self, request):
        return render(request, 'weather.html')

class TwentyView(views.View):
    def get(self, request):
        return render(request, '2020.html')

class JirungiView(views.View):
    def get(self, request):
        return render(request, 'jirungi.html')

class AdvencherView(views.View):
    def get(self, request):
        return render(request, 'advencher.html')

class RuletView(views.View):
    def get(self, request):
        return render(request, 'rulet.html')
        
class HighAndLowView(views.View):
    def get(self, request):
        return render(request, 'highandlow.html')

class CounterView(views.View):
    def get(self, request):
        return render(request, 'counter.html')

class TestView(views.View):
    def get(self, request):
        return render(request, 'test.html')