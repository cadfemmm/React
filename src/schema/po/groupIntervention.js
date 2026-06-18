const SCHEMA ={
    "title": "",
    "actions": [
        {
            "type": "back",
            "label": "Back"
        },
        {
            "type": "clear",
            "label": "Clear"
        },
        {
            "type": "save",
            "label": "Save"
        }
    ],
    "sections": [
        {
            "title": "Booking",
            "fields": [
                {
                    "name": "visit_type",
                    "label": "Visit Type",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Group Intervention",
                            "value": "group_intervention"
                        }
                    ]
                },
                {
                    "name": "session_type",
                    "label": "Session Type",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Stump Bandaging",
                            "value": "stump_bandaging"
                        },
                        {
                            "label": "Prosthesis Care",
                            "value": "prosthesis_care"
                        },
                        {
                            "label": "Orthosis Use",
                            "value": "orthosis_use"
                        },
                        {
                            "label": "Others",
                            "value": "others"
                        }
                    ]
                },
                {
                    "name": "session_type_other",
                    "label": "Specify Other Session Type",
                    "type": "textarea",
                    "showIf": {
                        "field": "session_type",
                        "equals": "others"
                    }
                },
                {
                    "name": "date",
                    "label": "Date",
                    "type": "date"
                },
                {
                    "name": "time",
                    "label": "Time",
                    "type": "time"
                },
                {
                    "name": "cpo",
                    "label": "CPO",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "patient_list",
                    "label": "Patient List",
                    "type": "multi-select-dropdown",
                    "options": [
                        {
                            "label": "Haripriyaa",
                            "value": "417136a5-b26e-4eaf-8cac-7ccab0034875"
                        },
                        {
                            "label": "MOHD FAIZAL BIN MAHMOD",
                            "value": "d54e1e55-fca7-458f-b3e6-1ac29845a4b1"
                        },
                        {
                            "label": "A Lokesh",
                            "value": "84098972-7f0b-41c8-a9ed-b5849fe89796"
                        },
                        {
                            "label": "NORZAFAINA BINTI NORDIN",
                            "value": "93b11c15-36d0-43c5-8c29-2ea56f749b34"
                        },
                        {
                            "label": "Aman Kumar Srivastav",
                            "value": "c576efab-ca98-48bf-b5af-b1bdff8fd795"
                        },
                        {
                            "label": "Aparna",
                            "value": "effc9708-e54d-4fea-a9f4-464ed317d8a1"
                        },
                        {
                            "label": "Test Test",
                            "value": "c15b7654-5095-427c-bf45-023d458f2ea5"
                        },
                        {
                            "label": " ",
                            "value": "6b84871a-8f2f-4015-88c9-b151cd546804"
                        },
                        {
                            "label": "Sunil",
                            "value": "7ddbb80a-13e1-43ee-8b4b-83eafe45bbdc"
                        },
                        {
                            "label": "Damon",
                            "value": "6b110f82-1313-4bc8-924a-41d266946d0d"
                        },
                        {
                            "label": "Rajesh Gandhi",
                            "value": "b91b431d-9077-407c-94d5-455d9db5db52"
                        },
                        {
                            "label": "Katherina",
                            "value": "1d536302-a8a8-49d6-812d-b36ef41ceef6"
                        },
                        {
                            "label": "Patient",
                            "value": "a22374dd-df3b-474d-9eab-9c633908ef75"
                        },
                        {
                            "label": "Arthi",
                            "value": "65731660-4a11-4f50-96f8-a6d9ca4e9f2a"
                        },
                        {
                            "label": "Ramesh Gandhi",
                            "value": "2b060165-a751-4efe-839f-a2c687fc60a7"
                        },
                        {
                            "label": "Ramesh G",
                            "value": "2ac1c9b4-8d4f-44cd-856a-6561d9812d14"
                        },
                        {
                            "label": "MOHD SHAKIRIN BIN CHE PAE",
                            "value": "223b7fe4-a5f1-418e-99cf-78a23ffa7118"
                        },
                        {
                            "label": "Sunil Varadaa Venkata",
                            "value": "fe082b93-cf9f-4ca8-8a2c-bfa41831159e"
                        },
                        {
                            "label": "LAI YUAN HUNG",
                            "value": "70a41a23-ebbb-4482-b874-afc3755daff7"
                        },
                        {
                            "label": "SURENDARAN RAVICHANDRAN",
                            "value": "380e5ac5-474c-4bba-9861-31adbcda34af"
                        },
                        {
                            "label": "NURUL AMIN BIN ASHRAF",
                            "value": "1659369b-9f27-4119-910a-837db93d67d7"
                        },
                        {
                            "label": "Nantha",
                            "value": "cd4739ee-ec65-4aba-96e2-068a59e196e5"
                        },
                        {
                            "label": "SV Varada",
                            "value": "399829fc-6962-4e7c-8637-6123c99d4777"
                        },
                        {
                            "label": "haripriya",
                            "value": "fcc2e67a-9223-4707-81e2-1664a0cd669d"
                        },
                        {
                            "label": "Nivetha",
                            "value": "f3df36bd-3451-46e9-9d15-c8169677a0fb"
                        },
                        {
                            "label": "Arun",
                            "value": "74207eca-e928-40c2-8053-12e43409d0d9"
                        },
                        {
                            "label": "Akash Kumar",
                            "value": "d2ad2ebd-e75d-4f97-9a6c-0fd0ceb224a8"
                        },
                        {
                            "label": "Sunil Krishna",
                            "value": "bd432c78-b4fa-4a15-b46e-e23b04b1c871"
                        },
                        {
                            "label": "FADHIL AMIR",
                            "value": "daf951a0-f996-45da-8232-9a11a206df09"
                        },
                        {
                            "label": "FADHIL AMIR",
                            "value": "bb3ef97c-5970-4c62-a2d8-8922622cd9ce"
                        },
                        {
                            "label": "NanthaTest",
                            "value": "b87eb170-fd89-4e19-9a89-2cf4d9b12b2b"
                        },
                        {
                            "label": "Sunil",
                            "value": "e3d503f7-71e1-48c2-91f5-e76354db43d6"
                        },
                        {
                            "label": "Sunil",
                            "value": "d6c33f0f-ac28-4525-b3af-52b02c351c5d"
                        },
                        {
                            "label": "Arthi",
                            "value": "7c928cce-9982-46c5-a2a9-4cf585036ef1"
                        },
                        {
                            "label": "Arthi",
                            "value": "5d6f4b4e-8e52-4f37-a055-78d2b78b75ce"
                        },
                        {
                            "label": "Nantha",
                            "value": "473b49ff-4326-4f7b-926a-8b1c3da0b4f7"
                        },
                        {
                            "label": "Nantha",
                            "value": "789a4279-93f0-4ea6-ae55-ef4eb2736498"
                        },
                        {
                            "label": "Nantha",
                            "value": "57cab718-4de2-431e-9fd1-54854cfec9ea"
                        },
                        {
                            "label": "Nantha",
                            "value": "ef3b8329-ac98-4b76-8d35-d2d9fd7f3ac1"
                        },
                        {
                            "label": "Sunil",
                            "value": "8a137a68-5830-4c94-85a6-d575488e393f"
                        },
                        {
                            "label": "Ramesh",
                            "value": "310f7b09-334b-4c7b-a05c-18943437be69"
                        },
                        {
                            "label": "Aisyah Nur",
                            "value": "6af0cda4-ab99-4fcd-a1c7-968d0d979d5f"
                        },
                        {
                            "label": "Muhammad Hafiz",
                            "value": "828e9034-b9ae-4fa8-9ed4-fe593762a24a"
                        },
                        {
                            "label": "NURUL NABILA",
                            "value": "25427664-d895-412e-8217-6d6ce4aa0fc0"
                        },
                        {
                            "label": "Kareem",
                            "value": "cdfd3f95-0fd4-4f6c-9588-32b86acc29b5"
                        },
                        {
                            "label": "Shaik",
                            "value": "fcea9f06-be68-4798-871b-fe44a97ed80c"
                        },
                        {
                            "label": "Mohammed",
                            "value": "7a071d8d-fd10-4a1d-9494-cb2aaaf8a092"
                        },
                        {
                            "label": "Afnaa",
                            "value": "9a23399c-dd4d-41f1-8a3c-01e2067c88eb"
                        },
                        {
                            "label": "Ahmad Bin",
                            "value": "603d07c9-56f3-4c8f-8d30-bd106d708d69"
                        },
                        {
                            "label": "Nur Aisyah",
                            "value": "cef877e4-fd23-45e8-82b8-ca77ec9e697e"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Session",
            "fields": [
                {
                    "name": "attendance",
                    "label": "Attendance",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Present",
                            "value": "present"
                        },
                        {
                            "label": "Absent",
                            "value": "absent"
                        }
                    ]
                },
                {
                    "name": "participation",
                    "label": "Participation",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Active",
                            "value": "active"
                        },
                        {
                            "label": "Passive",
                            "value": "passive"
                        },
                        {
                            "label": "Unable",
                            "value": "unable"
                        }
                    ]
                },
                {
                    "name": "response",
                    "label": "Response",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Improved",
                            "value": "improved"
                        },
                        {
                            "label": "Same",
                            "value": "same"
                        },
                        {
                            "label": "Reduced",
                            "value": "reduced"
                        }
                    ]
                }
            ]
        }
    ]
}