var examples = [
    {
        'id': 'football-ligue',
        'dataset': '{\n' +
            '    "nhits": 380,\n' +
            '    "parameters": {\n' +
            '        "dataset": [\n' +
            '            "resultats-ligue-1"\n' +
            '        ],\n' +
            '        "timezone": "UTC",\n' +
            '        "rows": 10,\n' +
            '        "sort": [\n' +
            '            "-name"\n' +
            '        ],\n' +
            '        "format": "json",\n' +
            '        "facet": [\n' +
            '            "name",\n' +
            '            "end_date",\n' +
            '            "start_date",\n' +
            '            "home_team",\n' +
            '            "away_team"\n' +
            '        ]\n' +
            '    },\n' +
            '    "records": [\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "44b9be3a1938c4b51da718f140e18aeaedc30a93",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Paris_SG",\n' +
            '                "away_team": "Amiens_SC",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4809097888cfa3d912a410718cd756531adec1ef",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Angers_SCO",\n' +
            '                "away_team": "FC_Girondins_de_Bordeaux",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "73af9244f8bba09b63913e8bee1c67b05b21a98d",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "LOSC",\n' +
            '                "away_team": "FC_Nantes",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "edeb227d4e82c2a0a7661cf0c95b31ba29e1ad01",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Montpellier_Héraut_SC",\n' +
            '                "away_team": "Stade MalherbeCaen",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "94f0123e33fe7c6fb91de064afcdef78dc98089a",\n' +
            '            "fields": {\n' +
            '                "home_goal": 4,\n' +
            '                "home_team": "Olympique_Lyonnais",\n' +
            '                "away_team": "Racing_Club_Strasbourg_Alsace",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "5c760ff1f43122a85d562846e41e7b8e60c76a30",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                "away_team": "Stade_Rennais_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 1,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "a8c544ca2b6a8f59545573c7df21a0e0d1b07365",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "AS_Monaco",\n' +
            '                "away_team": "Toulouse_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "1f02cadd75c3885ac8d3a0b38a73a48188beda37",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "AS_SaintÉtienne",\n' +
            '                "away_team": "OGC_Nice",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "e7cbc999a3688c34d34bbb5da043f22feb606d24",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Football_Club_Metz",\n' +
            '                "away_team": "En_Avant_de_Guingamp",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 3,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4725e9ff82c6716a46b660bddcac902aac51b1a1",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "Olympique_de_Marseille",\n' +
            '                "away_team": "Dijon_Football_Côte_dOr",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        }\n' +
            '    ],\n' +
            '    "facet_groups": [\n' +
            '        {\n' +
            '            "name": "name",\n' +
            '            "facets": []\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "end_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "start_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "home_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "away_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        }\n' +
            '    ]\n' +
            '}',
        'ontology': '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n' +
            '@prefix owl: <http://www.w3.org/2002/07/owl#> .\n' +
            '@prefix schema: <http://schema.org/> .\n' +
            '@prefix wdrs: <http://www.w3.org/2007/05/powder-s#> .\n' +
            '@prefix prov: <http://www.w3.org/ns/prov#> .\n' +
            '@prefix ns0: <http://open.vocab.org/terms/> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDisciplineOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#TransitiveProperty> , <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a parent discipline, for example rhythmic gymnastics with gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDisciplineOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Home>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The home ground, stadium or location of a Competitive Sporting Organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Home"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to a stage that it contains."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to an enumerated round type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Multi-stage Competition is a competition that is organised as a set of stages. An example is the Football World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiStageCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Ontology> , <http://www.bbc.co.uk/ontologies/provenance/Ontology> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Sport Ontology is a simple lightweight ontology for publishing data about competitive sports events."^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Sport Ontology"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://purl.org/dc/elements/1.1/creator>\n' +
            '              <http://uk.linkedin.com/pub/jem-rayfield/27/b19/757> , <http://uk.linkedin.com/in/paulwilton> , <http://www.blockslabpillar.com> , <http://www.linkedin.com/in/tfgrahame> , <http://uk.linkedin.com/pub/stuart-williams/8/684/351> , <http://uk.linkedin.com/in/brianwmcbride> ;\n' +
            '      <http://purl.org/dc/terms/license>\n' +
            '              <http://creativecommons.org/licenses/by/4.0#id> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/canonicalLocation>\n' +
            '              "https://repo.dev.bbc.co.uk/services/linked-data/ontologies/domain/sport/sport-2.13.ttl"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/changeReason>\n' +
            '              "Making sport:SportingOrganisation subClass core:Organisation. Refining some descriptions."@en-gb ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provided>\n' +
            '              "2015-05-14T08:53:58+00:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provider>\n' +
            '              <mailto:tom.grahame@bbc.co.uk> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/public>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/slug>\n' +
            '              "sport"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/version>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#imports>\n' +
            '              <http://www.bbc.co.uk/ontologies/coreconcepts> , <http://xmlns.com/foaf/0.1/> , <http://www.bbc.co.uk/ontologies/asset/> , <http://purl.org/NET/c4dm/event.owl> , <http://www.bbc.co.uk/ontologies/provenance> ;\n' +
            '      <http://www.w3.org/2002/07/owl#priorVersion>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.1> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionIRI>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.2> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionInfo>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Round>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A round is one or more competitions that is part of a Multi-Round Competition. Examples include the first round of Wimbledon and the final round of the FA Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Round"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competesIn>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitor, team or other agent to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competesIn"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#agent_in> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sporting organisation that participates in competitive sporting events. For example Manchester United or Team GB at the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isRoundOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to its corresponding multi-round competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isRoundOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/relegatesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the previous competition in a heirarchy that teams are relegated to. For example the  Premier League relegates to the nPower Championship."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "relegatesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/promotesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Person>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An athlete or other person with typically a participating role in a CompetitiveSportingOrganisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Person"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Person> , <http://www.bbc.co.uk/ontologies/coreconcepts/Person> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GroupCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation as a collection of leagues used to select the top N competitors from each league."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GroupCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-16>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated competition types, for example: domestic, international."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitionType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/race>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/division>\n' +
            '      a       <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Division relates a DivisionalCompetition to a competition which is a division of that DivisionalCompetition. Used for the olympics"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#seeAlso>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasDivisionList> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Venue>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The location of a sporting event. May be a stadium, track, lake etc."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Venue"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GoverningBody>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Governing Body for a sport, such as The Football Association."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GoverningBody"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-32>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MedalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that results in the awarding of a medal to the winner or runner up in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MedalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a competitor in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isGroupOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a group competition to its corresponding League competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isGroupOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its previous session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its previous stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/semi-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/flagImage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy property used to associate a team with the country flag it represented during the olympics" ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/asset/FlagImage> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The group of people that are available to compete in a particular competition. Two groups with the same members are not necessarily the same group."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Group> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its last unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to a round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a unit competition to its next unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Match>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The smallest unit of sporting competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Match"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to its first stage in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the last session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mixed>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Competition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competitive sporting event that usually appears as an occurrence of a recurring competition, for example the recurring English Football Premier League has a seasonal competition occurrence during 2012/13"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Competition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#Event> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/quarter-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/hosted>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isMatchOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isMatchOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasMatch> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/UnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A unit competition is the unit of competition defined by a competition discipline rules. Examples include a 100m race or Football match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "UnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "General description of the participation of players, drivers, riders etc, in groups and organisations."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingRole"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/vocab/participation/schema#Role> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the last round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that incorporates a number of different sports, such as the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/recurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the recurring instance of that competition, for example the 2012/13 Premier League to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "recurringCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RecurringCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetesForRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy class, used for associating an athlete with the national team they competed for during the Summer Olympics. Deprecated due to improper naming."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetesForRole"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isCompetitiveSportingOrganisationOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitive sporting group to a competitive sporting organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isCompetitiveSportingOrganisationOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Session>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sub-division of a competition, that must be broken up due to the duration of that competition, occurring for example in snooker or cricket."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Session"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a session within that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Divisional Competition is a competition that is divided into a number of competitions. London 2012 is an example of a Divisional Competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "DivisionalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/eventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a gender class instance."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "eventGender"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final-qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation involved in Sport, for example a Football team or the UK Government Department for Culture, Media and Sport."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Organization> , <http://www.bbc.co.uk/ontologies/coreconcepts/Organisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a unit competition in that round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/LeagueCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A League Competition is a hierarchy of competitions or competition within such a hierarchy."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "LeagueCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something, typically a competition, to an enumerated competition type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competitionType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/awayCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the home competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "awayCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a league competition to a corresponding group competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/isGroupOf> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its first unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to its previous unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/promotesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the next competition in a heirarchy that teams are promoted to. For example the nPower Championship promotes to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "promotesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/relegatesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/home-and-home>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its previous round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/practice>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its last stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportsDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The type of discipline a sporting event involves."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportsDiscipline"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its next stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/play-off>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/dateOfBirth>\n' +
            '      a       <http://www.w3.org/2002/07/owl#AnnotationProperty> , <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Implemented because foaf has no notion of date of birth. Deprecated in favour of core:dateOfBirth."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Person> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.11> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "dateOfBirth"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#date> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasMatch>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasMatch"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasDivision>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a divisional competition to a division in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasDivision"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineRecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition the covers many sports, such as the Summer Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineRecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Competition organised as a sequence of rounds, for example the Premier League or group stage of the World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiRoundCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/EventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated type, typically Male, Female or Mixed."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "EventGender"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/KnockoutCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition or stage of competition that progresses through rounds of individual fixtures whereby one team is eliminated as a result of each fixture."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "KnockoutCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a child discipline, for example gymnastics with rhythmic gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDiscipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the first round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isSessionOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isSessionOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasHome>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a Competitive Sporting Organisation to its home ground, stadium or location."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasHome"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Home> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its next round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetedFor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Associates an agent with sporting organisations non-temporally."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetedFor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/homeCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the away competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "homeCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasCompetitor> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its next session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundNumber>\n' +
            '      a       <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Indicates the sequential number of a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundNumber"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#int> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the first session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition such as the Rugby Super League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RoundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated round types, for example: preliminary, qualifying or final."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RoundType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/discipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something to a sporting discipline, for example a person to athletics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "discipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isStageOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage to a multi-stage competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isStageOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-elimination>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/HockeyTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SoccerClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SportsTeam>\n' +
            '  a owl:Class ;\n' +
            '  owl:equivalentClass schema:SportsTeam ;\n' +
            '  rdfs:label "équipe sportive"@fr, "sports team"@en, "Sportmannschaft"@de, "スポーツチーム"@ja, "ομαδικά αθλήματα"@el, "sportteam"@nl ;\n' +
            '  rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '  owl:sameAs <http://dbpedia.org/ontology/SportsTeam> ;\n' +
            '  rdfs:subClassOf <http://dbpedia.org/ontology/Organisation> ;\n' +
            '  wdrs:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '  prov:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:SportsTeam> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/draftTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/team> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/RugbyClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/thirdTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/fastestDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/firstDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/poleDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/secondTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/manager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/managerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/generalManager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AustralianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CanadianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CyclingTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/FormulaOneTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/HandballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SpeedwayTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/amateurTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/leadTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/playerInTeam> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/proTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeaguePromoted> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueRelegated> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueWinner> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/trainerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BasketballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/> ns0:defines <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/data/definitions.ttl> ns0:describes <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachedTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AmericanFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/formerTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/debutTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/club> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BaseballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CricketTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/juniorTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nationalTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/ncaaTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nflTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/oldTeamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/stateOfOriginTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/youthClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .',
        'mapping': 'mappings:\n' +
            '    match:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(home_team)-$(away_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Match\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_home_goal\',$(home_goal),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_away_goal\',$(away_goal),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_awayCompetitor\',$(away_team)]\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_homeCopetitor\',$(home_team)]\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_isMatchOf\',$(name),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '    round:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Round\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_hasMatch\',$(home_team)-$(away_team))]\n' +
            '        - [\'http://dbpedia.org/ontology/startDate\',$(start_date)]\n' +
            '        - [\'http://dbpedia.org/ontology/endDate\',$(end_date)]\n' +
            '    homeTeam:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)-$(home_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            '    awayTeam:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)-$(away_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            'sources:\n' +
            '    dataset-source: [data.json~jsonpath, \'$.records.[*].fields\']'
    }
];

const router = new VueRouter({
    routes: [
        {
            path: '/result',
            name: 'result',
        }
    ]
});

var form = new Vue({
    el: '#form',
    data: {
        examples: examples,
        selected_example: {},
        dataset: '',
        ontology: '',
        mapping: '',
    },

    watch: {
        selected_example: function () {
            this.dataset = this.selected_example.dataset;
            this.ontology = this.selected_example.ontology;
            this.mapping = this.selected_example.mapping;
        }
    },
    methods: {
        submit_form: function () {
            param = {name: 'result'/*, params: {dataset: this.dataset, mapping: this.mapping, ontology: this.ontology}}*/}
            router.push('../result')
        }
    }
});