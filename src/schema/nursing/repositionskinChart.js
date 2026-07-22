const CHART_SCHEMA = {
    "title": "Daily Repositioning & Skin Inspection Chart",
    "styles": {
        "primary": "#1a6b8a",
        "primaryDark": "#0d3d52",
        "primaryLight": "#e8f4f8",
        "border": "#b2c8d8",
        "text": "#0f172a",
        "muted": "#475569",
        "white": "#ffffff"
    },
    "fields": [
        {
            "name": "chartDate",
            "label": "Date",
            "type": "date",
            "required": false
        },
        {
            "type": "subheading",
            "label": "Codes: L = left | R = right | B = back | P = prone (front) | M = mobilised | S = seated"
        },
        {
            "name": "repositioning_table",
            "type": "dynamic-table",
            "minRows": 16,
            "columns": [
                {
                    "key": "time",
                    "label": "Time",
                    "placeholder": "Time (e.g. 08:00)",
                    "type": "text"
                },
                {
                    "key": "from_position",
                    "label": "From Position",
                    "placeholder": "From",
                    "type": "single-select",
                    "options": [
                        "L - Left",
                        "R - Right",
                        "B - Back",
                        "P - Prone",
                        "M - Mobilised",
                        "S - Seated"
                    ]
                },
                {
                    "key": "to_position",
                    "label": "To Position",
                    "placeholder": "To",
                    "type": "single-select",
                    "options": [
                        "L - Left",
                        "R - Right",
                        "B - Back",
                        "P - Prone",
                        "M - Mobilised",
                        "S - Seated"
                    ]
                },
                {
                    "key": "skin_comments",
                    "label": "Skin Comments",
                    "placeholder": "e.g. Left Hip Non Blanching",
                    "type": "text"
                },
                {
                    "key": "action_taken",
                    "label": "Action Taken",
                    "placeholder": "e.g. Reassess at next level change",
                    "type": "text"
                },
                {
                    "key": "initials",
                    "label": "Initials",
                    "placeholder": "Initials",
                    "type": "text"
                }
            ]
        }
    ]
}
