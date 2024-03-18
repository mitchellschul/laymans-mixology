"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('OPAIEndpointQuery/', views.OPAIEndpointQuery, name='Ingredients query'),
    path('setDrinks/', views.setDrinks, name='Set Drinks'),
    path('getDrinks/', views.getDrinks, name='Drinks query'),
    path('addIngredient/', views.addIngredient, name='Add Ingredient'),
    path('getIngredients/', views.getIngredients, name='Get Ingredient'),
    path('removeIngredient/', views.removeIngredient, name='Remove Ingredient'),
    path('addSavedDrink/', views.setSavedDrinks, name='Add Saved Drink'),
    path('getSavedDrinks/', views.getSavedDrinks, name='Get Saved Drinks'),
    path('signUp/', views.signUp, name='Sign Up'),
    path('logIn/', views.logIn, name='Log In'),
    # path('')
    # path('logout/', views.logout_view, name='logout'),
    # path('conversations/', views.conversation_list, name='conversation-list'),
    # path('get-statistics/', views.conversation_stats, name='conversation-stats'),
]
