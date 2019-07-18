from django.conf.urls import url
from evamap_web.views import home, form, result

urlpatterns = [
    url(r'^form/?$', form, name='form'),
    url(r'^result/?$', result, name='result'),
    url(r'', home, name='home')
]
