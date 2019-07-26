from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from EvaMap.EvaMap import EvaMap


@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    return render(request, 'form.html')


@require_http_methods(['GET', 'POST'])
def result(request):
    onto = request.POST.get('onto')
    mapping = request.POST.get('mapping')
    dataset = request.POST.get('dataset')

    test = EvaMap(onto, mapping, dataset)
    try:
        test.evaluate_mapping()
    except:
        pass
    print(test.score_tot)
    return render(request, 'result.html', {'final_list' : test.final_list})
