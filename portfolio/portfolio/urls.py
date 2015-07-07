"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
import rest_framework
from django.conf.urls import include, patterns, url
from django.contrib import admin
from posthandler import views
from posthandler.views import *
from posthandler.models import *
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings

admin.autodiscover()

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^$', 'views.posthandler', name='home'),
    #url(r'^graph/generate/data/', posthandler.as_view())
    #url(r'^graph/scatter-plot/', 'posthandler.views.scatter' name='scatter')
    #url(r'^graph/line', 'posthandler.views.line' name='line')
]

urlpatterns = patterns('',
	url(r'^admin/', include(admin.site.urls)),
    url(r'^graph/generate/data/', graph.as_view()),
    url(r'^$', 'posthandler.views.home', name='home'),
	url(r'^graph/scatter-plot/', 'posthandler.views.scatter', name='scatter'),
	url(r'^graph/line', 'posthandler.views.line', name='line')
)

urlpatterns += patterns('',
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
)