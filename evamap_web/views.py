from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    return render(request, 'form.html')


@csrf_exempt
@require_http_methods(['GET', 'POST'])
def result(request):
    print(request.POST)
    return render(request, 'result.html')
