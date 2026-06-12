const SCHEMA ={
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
            "fields": [
                {
                    "type": "subheading",
                    "label": "Booking Details"
                },
                {
                    "name": "visit_type",
                    "label": "Visit Type",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "visit_type_others",
                    "label": "Others",
                    "type": "input",
                    "showIf": {
                        "field": "visit_type",
                        "equals": "others"
                    }
                },
                {
                    "name": "wheelchair_type",
                    "label": "Wheelchair Type",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "class_topic",
                    "label": "Class Topic",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "class_topic_others",
                    "label": "Others",
                    "type": "input",
                    "showIf": {
                        "field": "class_topic",
                        "equals": "others"
                    }
                },
                {
                    "name": "booking_date",
                    "label": "Date",
                    "type": "date"
                },
                {
                    "name": "booking_time",
                    "label": "Time",
                    "type": "input"
                },
                {
                    "name": "trainer",
                    "label": "Trainer",
                    "type": "single-select",
                    "options": [
                        {
                            "label": "Staff Name",
                            "value": "staff_name"
                        }
                    ]
                },
                {
                    "name": "participant_list",
                    "label": "Participant List",
                    "type": "multi-select-dropdown",
                    "options": [
                        {
                            "label": "Select Participant / Patient Name",
                            "value": "participant_name"
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "label": "Session"
                },
                {
                    "name": "attendance",
                    "label": "Attendance",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "participation",
                    "label": "Participation",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "understanding_level",
                    "label": "Understanding Level",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "session_response",
                    "label": "Session Response",
                    "type": "single-select",
                    "options": []
                },
                {
                    "name": "activity_done",
                    "label": "Activity Done",
                    "type": "multi-select-dropdown",
                    "options": []
                },
                {
                    "name": "notes",
                    "label": "Notes",
                    "type": "input",
                    "rows": 4
                }
            ]
        }
    ]
}