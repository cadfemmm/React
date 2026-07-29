const ISI_SCHEMA = {
    "title": "Insomnia Severity Index (ISI)",
    "sections": [
        {
            "fields": [
                {
                    "type": "subheading",
                    "label": "Please rate the current severity of your insomnia problem."
                },
                {
                    "type": "radio-matrix",
                    "name": "q1",
                    "label": "Difficulty falling asleep",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q2",
                    "label": "Difficulty staying asleep",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q3",
                    "label": "Problems waking up too early",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q4",
                    "label": "How satisfied/dissatisfied are you with your current sleep pattern?",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q5",
                    "label": "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q6",
                    "label": "How worried/distressed are you about your current sleep problem?",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "radio-matrix",
                    "name": "q7",
                    "label": "To what extent do you consider your sleep problem to interfere with your daily functioning?",
                    "options": [
                        {
                            "label": "0",
                            "value": 0
                        },
                        {
                            "label": "1",
                            "value": 1
                        },
                        {
                            "label": "2",
                            "value": 2
                        },
                        {
                            "label": "3",
                            "value": 3
                        },
                        {
                            "label": "4",
                            "value": 4
                        }
                    ]
                },
                {
                    "type": "input",
                    "name": "isi_total",
                    "label": "ISI Total Score",
                    "readOnly": true
                },
                {
                    "type": "input",
                    "name": "isi_severity",
                    "label": "Insomnia Severity",
                    "readOnly": true
                }
            ]
        }
    ]
}