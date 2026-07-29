const schema = {
  "title": "Rancho Los Amigos Scale – Revised (RLAR-S)",
  "sections": [
    {
      "title": "Select RLAR Level",
      "fields": [
        {
          "name": "rlar_level",
          "label": "Rancho Los Amigos Level",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Level I – No response: total assistance\nYour patient did not respond to external stimuli and may appear to be asleep.",
              "value": 1
            },
            {
              "label": "Level II – Generalized response: total assistance\n\nYour patient reacts to external stimuli in non-specific, inconsistent, and non-purposeful manners. Their responses are limited and typically the same even if the stimuli are different.",
              "value": 2
            },
            {
              "label": "Level III – Localized response: total assistance\n\nYour patient responds specifically and inconsistently with delays to stimuli. Their responses are directly related to stimuli and may respond more to people they know than strangers.",
              "value": 3
            },
            {
              "label": "Level IV – Confused/agitated: maximal assistance\n\nYour patient exhibits bizarre, non-purposeful, incoherent, or inappropriate behaviors. Their agitation appears more from internal confusion than external factors. They have no short-term recall, and their attention is short and non-selective.",
              "value": 4
            },
            {
              "label": "Level V – Confused, inappropriate non-agitated: maximal assistance\n\nYour patient gives random, fragmented, and non-purposeful responses to complex or unstructured stimuli. They are able to follow simple commands consistently, but memory and selective attention are impaired.",
              "value": 5
            },
            {
              "label": "Level VI – Confused, appropriate: moderate assistance\n\nYour patient gives context-appropriate, goal-directed responses and depends on external direction. Memory problems persist.",
              "value": 6
            },
            {
              "label": "Level VII – Automatic, appropriate: minimal assistance\n\nYour patient behaves appropriately in familiar settings, performs daily routines automatically, and needs minimal supervision for safety.",
              "value": 7
            },
            {
              "label": "Level VIII – Purposeful, appropriate: stand-by assistance\n\nYour patient is oriented to person, place, and time and performs familiar tasks independently with minimal assistance.",
              "value": 8
            },
            {
              "label": "Level IX – Purposeful, appropriate: stand-by assistance on request\n\nYour patient independently switches between tasks, uses compensatory strategies, and benefits from assistance in anticipating challenges.",
              "value": 9
            },
            {
              "label": "Level X – Purposeful, appropriate: modified independent\n\nYour patient multitasks independently, develops memory strategies, and manages impairments using compensatory techniques.",
              "value": 10
            }
          ]
        }
      ]
    }
  ],
  "actions": [
    {
      "type": "back",
      "label": "Cancel"
    },
    {
      "type": "save",
      "label": "Save"
    }
  ]
}