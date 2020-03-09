from django.shortcuts import render
from django.views.decorators.http import require_http_methods


@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    return render(request, 'form.html')


@require_http_methods(['GET', 'POST'])
def result(request):
    print(request.POST)
    return render(request, 'result.html')
