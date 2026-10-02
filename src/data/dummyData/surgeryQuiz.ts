import type { QuizQuestion } from './types';

export const surgeryQuizQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "category": "surgery",
    "question": "សំរាប់ការចាក់ Inferior Alveolar Nerve Block ត្រូវបានសំគាល់ដោយពាក្យ",
    "options": [
      {
        "id": "a",
        "text": "No Bone, No Injection"
      },
      {
        "id": "b",
        "text": "Aspiration"
      },
      {
        "id": "c",
        "text": "Inject Slowly"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "ការចាក់ IANB ត្រូវតែប៉ះឆ្អឹងមុននឹងចាក់ថ្នាំស្ពឹក (No Bone, No Injection) ដើម្បីចៀសវាងការចាក់ចូល Parotid Gland, ត្រូវ Aspirate បង្ការ intravascular injection, និងត្រូវ Inject slowly ដើម្បីកាត់បន្ថយការឈឺចាប់។"
  },
  {
    "id": 2,
    "category": "surgery",
    "question": "Management for poorly uncontrolled hyperthyroidism is",
    "options": [
      {
        "id": "a",
        "text": "Avoid Surgical procedure"
      },
      {
        "id": "b",
        "text": "Refer to medical doctor"
      },
      {
        "id": "c",
        "text": "Treat any acute infection"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "អ្នកជំងឺ Poorly controlled hyperthyroidism អាចប្រឈមនឹង Thyroid Storm។ ដូច្នេះត្រូវចៀសវាងការវះកាត់, បញ្ជូនទៅគ្រូពេទ្យឯកទេស, និងព្យាបាលការឆ្លងរោគស្រួចស្រាវភ្លាមៗ។"
  },
  {
    "id": 3,
    "category": "surgery",
    "question": "Pulpal injection can be used as a sole injection technique",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: Pulpal injection ជាSupplemental/Adjunctive technique ប៉ុណ្ណោះ នៅពេលដែលចាក់ស្ពឹកតាមវិធីធម្មតាមិនទាន់ស្ពឹកល្អ ហើយទាមទារអោយមាន Exposure នៃ Pulpal chamber។"
  },
  {
    "id": 4,
    "category": "surgery",
    "question": "Maximum dose recommended for Articaine is",
    "options": [
      {
        "id": "a",
        "text": "7 mg/kg"
      },
      {
        "id": "b",
        "text": "6.6 mg/kg"
      },
      {
        "id": "c",
        "text": "6 mg/kg"
      },
      {
        "id": "d",
        "text": "7.6 mg/kg"
      }
    ],
    "correctAnswer": "a",
    "explanation": "តាមស្តង់ដារឱសថសាស្ត្រទន្តសាស្ត្រ (Malamed) កម្រិតអតិបរមា (Max dose) របស់ Articaine គឺ 7.0 mg/kg។"
  },
  {
    "id": 5,
    "category": "surgery",
    "question": "Mepivacaine អាចប្រើប្រាស់បានសំរាប់ស្ត្រីមានផ្ទៃពោះ",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: Mepivacaine ស្ថិតក្នុង FDA Category C។ Lidocaine និង Prilocaine ស្ថិតក្នុង FDA Category B ដែលសុវត្ថិភាពជាងសម្រាប់ស្ត្រីមានផ្ទៃពោះ។"
  },
  {
    "id": 6,
    "category": "surgery",
    "question": "គុណសម្បត្តិរបស់ monofilament suture",
    "options": [
      {
        "id": "a",
        "text": "smooth surface"
      },
      {
        "id": "b",
        "text": "no bacterial harbors"
      },
      {
        "id": "c",
        "text": "stretch easily"
      },
      {
        "id": "d",
        "text": "A and B"
      },
      {
        "id": "e",
        "text": "A and C"
      }
    ],
    "correctAnswer": "d",
    "explanation": "Monofilament suture មានផ្ទៃរលោង (smooth surface) និងមិនងាយទាក់ទាញបាក់តេរីឱ្យតោងទុំ (no/low bacterial harboring or wicking)។"
  },
  {
    "id": 7,
    "category": "surgery",
    "question": "តើការប្រើប្រាស់ថ្នាំស្ពឹក មានគោលបំណងអ្វី?",
    "options": [
      {
        "id": "a",
        "text": "Pain control"
      },
      {
        "id": "b",
        "text": "Diagnosis"
      },
      {
        "id": "c",
        "text": "Blood control"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "ថ្នាំស្ពឹកប្រើសម្រាប់៖ Pain control (បំបាត់ការឈឺចាប់), Diagnosis ( diagnostic block ដើម្បីកំណត់ប្រភពឈឺចាប់), និង Blood control (តាមរយៈ vasoconstrictor)។"
  },
  {
    "id": 8,
    "category": "surgery",
    "question": "The most use and frequent suturing technique is",
    "options": [
      {
        "id": "a",
        "text": "Interrupted suture"
      },
      {
        "id": "b",
        "text": "Figure of Eight"
      },
      {
        "id": "c",
        "text": "Continued suture"
      },
      {
        "id": "d",
        "text": "Horizontal mattress suture"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Simple Interrupted Suture គឺជាបច្ចេកទេសដេរមុខរបួសដែលគេប្រើយ៉ាងទូលំទូលាយ និងញឹកញាប់បំផុតក្នុង Oral Surgery។"
  },
  {
    "id": 9,
    "category": "surgery",
    "question": "ប្រសិនបើមានអាឡែហ្ស៊ីពេលដែលក្មេងកំពុងចាក់ បង្ការពីការប្រើប្រាស់ថ្នាំស្ពឹក",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "a",
    "explanation": "True: ប្រសិនបើមានសញ្ញា Allergic reaction ត្រូវបញ្ឈប់ការចាក់ និងចាត់វិធានការសង្គ្រោះបន្ទាន់ភ្លាមៗ។"
  },
  {
    "id": 10,
    "category": "surgery",
    "question": "ចំនួនថ្នាំស្ពឹកដែលអាចប្រើប្រាស់លើក្មេងទំងន់ 20kg ដោយចាក់ 1.8ml Cartridge of lidocaine 2% With Adrenaline 1: 100,000",
    "options": [
      {
        "id": "a",
        "text": "2 Cartridges"
      },
      {
        "id": "b",
        "text": "3 Cartridges"
      },
      {
        "id": "c",
        "text": "4 Cartridges"
      }
    ],
    "correctAnswer": "a",
    "explanation": "កម្រិត Lidocaine សុវត្ថិភាពសម្រាប់កុមារ គឺ ~4.4 mg/kg។ 20 kg x 4.4 mg/kg = 88 mg។ 1 Cartridge (1.8ml 2%) មាន 36 mg។ 88 mg / 36 mg = 2.44 កែវ -> ចំនួនសុវត្ថិភាពអតិបរមាគឺ 2 Cartridges។"
  },
  {
    "id": 11,
    "category": "surgery",
    "question": "Articaine is recommended for Hypertensive patient",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: Articaine ដែលមាន vasoconstrictor (Epinephrine 1:100k or 1:200k) ត្រូវប្រុងប្រយ័ត្នខ្ពស់ ឬចៀសវាងលើអ្នកជំងឺ Hypertensive ដែលមិនបានគ្រប់គ្រងសម្ពាធឈាមបានល្អ។"
  },
  {
    "id": 12,
    "category": "surgery",
    "question": "សំរាប់ការដកធ្មេញ Upper 1st Premolar យើងអាចប្រើប្រាស់បានចលនាទាំងអស់លើកលែងតែ",
    "options": [
      {
        "id": "a",
        "text": "Apical Pressure"
      },
      {
        "id": "b",
        "text": "Buccal Pressure"
      },
      {
        "id": "c",
        "text": "Palatal Pressure"
      },
      {
        "id": "d",
        "text": "Rotational Pressure"
      },
      {
        "id": "e",
        "text": "Tractional Force"
      }
    ],
    "correctAnswer": "d",
    "explanation": "Upper 1st Premolar ជាទូទៅមាន ឬស២ (Buccal & Palatal) និងមានចុងឬសតូចស្រួច ការប្រើ Rotational Pressure (ចលនាបង្វិល) នឹងធ្វើឱ្យបាក់ឬសធ្មេញ! ដូច្នេះត្រូវហាមឃាត់។"
  },
  {
    "id": 13,
    "category": "surgery",
    "question": "Candidiasis is a disease which is possible caused from",
    "options": [
      {
        "id": "a",
        "text": "Well controlled diabetes"
      },
      {
        "id": "b",
        "text": "Hypertension"
      },
      {
        "id": "c",
        "text": "Human Immunodeficiency Virus"
      },
      {
        "id": "d",
        "text": "Angina Pectoris"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Oral Candidiasis ញឹកញាប់កើតឡើងលើអ្នកជំងឺ Immunocompromised ដូចជាអ្នកឆ្លង HIV/AIDS។"
  },
  {
    "id": 14,
    "category": "surgery",
    "question": "Maximum dose recommended for Lidocaine is",
    "options": [
      {
        "id": "a",
        "text": "7 mg/kg"
      },
      {
        "id": "b",
        "text": "6.6 mg/kg"
      },
      {
        "id": "c",
        "text": "6 mg/kg"
      },
      {
        "id": "d",
        "text": "7.6 mg/kg"
      }
    ],
    "correctAnswer": "a",
    "explanation": "កម្រិតអតិបរមា (Max dose) Recommended របស់ Lidocaine with epinephrine គឺ 7.0 mg/kg (មិនឱ្យលើសពី 500mg)។"
  },
  {
    "id": 15,
    "category": "surgery",
    "question": "Upper Molar Extraction Forcep មានទ្រង់ទ្រាយសំប៉ែត និងមានធ្មេញពីរក្នុង ចំពុះវា",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: Upper Molar forceps មានចំពុះខាង Buccal ស្រួចមួយសម្រាប់ចូល Bifurcation និងខាង Palatal រលោង (មិនមែនមានធ្មេញពីរ ឬសំប៉ែតទាំងសងខាងទេ)។"
  },
  {
    "id": 16,
    "category": "surgery",
    "question": "Dental Extraction is contra-indicated except",
    "options": [
      {
        "id": "a",
        "text": "Recent Myocardial Infarction"
      },
      {
        "id": "b",
        "text": "Recent Angina Pectoris"
      },
      {
        "id": "c",
        "text": "Blood related diseases"
      },
      {
        "id": "d",
        "text": "Well control hypertension"
      },
      {
        "id": "e",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "Well-controlled hypertension មិនមែនជា Contraindication ក្នុងការដកធ្មេញនោះទេ (អាចដកធ្មេញបានដោយសុវត្ថិភាព)។"
  },
  {
    "id": 17,
    "category": "surgery",
    "question": "វិធីសាស្ត្រក្នុងការឃាត់ឈាម កំឡុងពេលដកធ្មេញ",
    "options": [
      {
        "id": "a",
        "text": "Pressure gauze"
      },
      {
        "id": "b",
        "text": "collagen sponge"
      },
      {
        "id": "c",
        "text": "Tranexamic acid solution"
      },
      {
        "id": "d",
        "text": "Suture"
      },
      {
        "id": "e",
        "text": "All of above"
      }
    ],
    "correctAnswer": "e",
    "explanation": "វិធីឃាត់ឈាមក្រោយដកធ្មេញរួមមាន៖ សង្កត់ប្រឡោះដកធ្មេញដោយ Gauze, ដាក់ Collagen sponge/Gelatamp, ប្រើ Tranexamic acid, និងការដេរភ្ជិត (Suture)។"
  },
  {
    "id": 18,
    "category": "surgery",
    "question": "Nasopalatine nerve block គឺចាក់សំរាប់ Anesthetize",
    "options": [
      {
        "id": "a",
        "text": "Buccal Tissue របស់ធ្មេញ anterior"
      },
      {
        "id": "b",
        "text": "Palatal Tissue របស់ធ្មេញ anterior"
      },
      {
        "id": "c",
        "text": "ធ្មេញ Premolars និង Molars"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Nasopalatine nerve block ធ្វើឱ្យស្ពឹក Palatal mucoperiosteum និង soft tissue នៃធ្មេញមុខ (ពី Canine ម្ខាងទៅ Canine ម្ខាងទៀត)។"
  },
  {
    "id": 19,
    "category": "surgery",
    "question": "Universal forcep N150 ត្រូវបានប្រើសំរាប់ដកធ្មេញ",
    "options": [
      {
        "id": "a",
        "text": "Maxilla incisors and Premolars"
      },
      {
        "id": "b",
        "text": "All maxillary teeth"
      },
      {
        "id": "c",
        "text": "Mandibular incisors and premolars"
      },
      {
        "id": "d",
        "text": "All mandibular teeth"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Cryer / Universal Forcep #150 ប្រើប្រាស់សម្រាប់ដកធ្មេញលើ (Maxillary Incisors, Canines & Premolars)។ ចំណែក #151 ប្រើសម្រាប់ធ្មេញក្រោម។"
  },
  {
    "id": 20,
    "category": "surgery",
    "question": "ទោះបីជា អ្នកជំងឺធ្លាប់មានប្រវត្តិកើតជំងឺ Myocardial Infarction ក្នុងរយៈពេល 6 ខែមុនប្រវត្តិក៏ដោយ ការព្យាបាលធ្មេញនៅតែអាចធ្វើធម្មតា",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: អ្នកជំងឺដែលទើបតែកើត Myocardial Infarction ក្នុងអំឡុង ៦ខែចុងក្រោយ ត្រូវពន្យារពេលព្យាបាលធ្មេញមិនបន្ទាន់ (Elective procedures) ជាដាច់ខាត។"
  },
  {
    "id": 21,
    "category": "surgery",
    "question": "គ្រប់ Nerve block injection គប្បីត្រូវធ្វើ aspiration",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "a",
    "explanation": "True: ការ Aspirate មុនពេល Inject ថ្នាំស្ពឹកជាវិធានការចាំបាច់បំផុត ដើម្បីការពារកុំឱ្យចាក់ថ្នាំស្ពឹកចូលក្នុងសរសៃឈាម (Intravascular injection)។"
  },
  {
    "id": 22,
    "category": "surgery",
    "question": "Greater palatine nerve block គឺចាក់សំរាប់ Anesthetize",
    "options": [
      {
        "id": "a",
        "text": "Palatal tissue របស់ធ្មេញ Molars"
      },
      {
        "id": "b",
        "text": "Buccal tissue របស់ធ្មេញ Molars"
      },
      {
        "id": "c",
        "text": "ធ្មេញ Molars"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Greater Palatine Nerve Block ធ្វើឱ្យស្ពឹក Palatal soft tissue និងឆ្អឹងនៃធ្មេញ Molar & Premolar (មិនបានធ្វើឱ្យស្ពឹកតួធ្មេញ molar ទេ)។"
  },
  {
    "id": 23,
    "category": "surgery",
    "question": "Lidocaine ធ្វើ Metabolism នៅក្នុង",
    "options": [
      {
        "id": "a",
        "text": "ថ្លើម"
      },
      {
        "id": "b",
        "text": "តម្រងនោម"
      },
      {
        "id": "c",
        "text": "ឈាម"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Lidocaine ជាប្រភេទ Amide local anesthetic ដែលត្រូវធ្វើ Metabolism ជាចម្បងនៅក្នុងថ្លើម (Liver) ដោយអង់ស៊ីម Hepatic microsomal enzymes។"
  },
  {
    "id": 24,
    "category": "surgery",
    "question": "If the root fractured is not infected and it is longer than 2mm, we can keep it the socket",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: លក្ខខណ្ឌទុកចុងឬសបាក់ក្នុង socket បាន លុះត្រាតែវាមានទំហំតូចខ្លាំង (<2-3mm), មិនឆ្លងរោគ, និងស្ថិតជ្រៅក្នុងឆ្អឹង។ បើវែងជាង 2mm (longer than 2mm) ត្រូវតែប្រឹងប្រែងយកចេញ។"
  },
  {
    "id": 25,
    "category": "surgery",
    "question": "Tongue can also be anesthetized by Vazirani-Akinosi nerve block injection",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "a",
    "explanation": "True: Vazirani-Akinosi (Closed-mouth) technique ធ្វើឱ្យស្ពឹក Inferior Alveolar, Lingual, និង Mylohyoid nerves ដូច្នេះអណ្តាត (Lingual nerve) នឹងស្ពឹកដែរ។"
  },
  {
    "id": 26,
    "category": "surgery",
    "question": "សំរាប់ការដកធ្មេញ Upper Anterior តើអ្នកជំងឺ Position របស់គាត់ប្រែមកខាងណា?",
    "options": [
      {
        "id": "a",
        "text": "Looking straight ahead"
      },
      {
        "id": "b",
        "text": "Looking slightly turn to the operator"
      },
      {
        "id": "c",
        "text": "Looking slightly turn to the left"
      }
    ],
    "correctAnswer": "a",
    "explanation": "សម្រាប់ការដកធ្មេញមុខលើ (Upper Anterior teeth), ក្បាលរបស់អ្នកជំងឺត្រូវស្ថិតក្នុងទម្រង់ Straight ahead (មើលត្រង់ទៅមុខ)។"
  },
  {
    "id": 27,
    "category": "surgery",
    "question": "Lower premolar can also be anesthetized by long buccal nerve block injection",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: Long Buccal Nerve ផ្គត់ផ្គង់តែ Buccal soft tissue របស់ Mandibular Molars ប៉ុណ្ណោះ។ Buccal tissue របស់ Premolars ត្រូវផ្គត់ផ្គង់ដោយ Mental Nerve។"
  },
  {
    "id": 28,
    "category": "surgery",
    "question": "LA Overdose អាចបង្កអោយមានគ្រោះថ្នាក់ដល់ជីវិតបាន",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "a",
    "explanation": "True: Local Anesthetic Systemic Toxicity (LAST) អាចបង្កឱ្យមានការប្រកាច់ (Seizures), គាំងបេះដូង និងដង្ហើម ហើយអាចគ្រោះថ្នាក់ដល់ជីវិត។"
  },
  {
    "id": 29,
    "category": "surgery",
    "question": "សំរាប់ការយកចេញ Root fragment ដែលបានបាក់យើងអាចប្រើ",
    "options": [
      {
        "id": "a",
        "text": "Root tip picks"
      },
      {
        "id": "b",
        "text": "Endodontic H file"
      },
      {
        "id": "c",
        "text": "All of above"
      }
    ],
    "correctAnswer": "c",
    "explanation": "ការយកចុងឬសបាក់តូចៗចេញ អាចប្រើប្រាស់ Root tip picks ឬ Endodontic Hedstrom (H) file ដោយរន្ធត់ចូលក្នុង Root canal ដើម្បីទាញចេញ។"
  },
  {
    "id": 30,
    "category": "surgery",
    "question": "1/100,000 Anesthetic agent (Slight Lidocaine 1.8ml) បើប្រើ Epinephrine 1:100,000 មានចំនួន",
    "options": [
      {
        "id": "a",
        "text": "34 mg"
      },
      {
        "id": "b",
        "text": "36 mg"
      },
      {
        "id": "c",
        "text": "68 mg"
      },
      {
        "id": "d",
        "text": "54 mg"
      }
    ],
    "correctAnswer": "b",
    "explanation": "ក្នុង 1.8ml Cartridge នៃ 2% Lidocaine មានបញ្រ្ចៀសជាតិ Lidocaine ចំនួន 20 mg/ml x 1.8 ml = 36 mg។"
  },
  {
    "id": 31,
    "category": "surgery",
    "question": "Caldwell-luc technique is to remove root/teeth in the sinus",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "a",
    "explanation": "True: Caldwell-Luc procedure គឺជាវិធីសាស្ត្រវះកាត់បើក Maxillary sinus តាមខាង Anterior wall ដើម្បីយកឬសធ្មេញ ឬធ្មេញដែលជ្រោះចូលក្នុង Maxillary sinus មកក្រៅ។"
  },
  {
    "id": 32,
    "category": "surgery",
    "question": "សំរាប់ Pain and Anxiety control យើងអាចប្រើ",
    "options": [
      {
        "id": "a",
        "text": "General Anesthesia"
      },
      {
        "id": "b",
        "text": "Local Anesthesia"
      },
      {
        "id": "c",
        "text": "Sedation"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "គ្រប់វិធីទាំងអស់ (LA, Sedation, GA) សុទ្ធតែអាចប្រើសម្រាប់គ្រប់គ្រងការឈឺចាប់ និងការភ័យខ្លាច (Pain and Anxiety control) ក្នុងទន្តសាស្ត្រ។"
  },
  {
    "id": 33,
    "category": "surgery",
    "question": "សំរាប់ការចាក់ Long buccal nerve block យើងប្រើប្រាស់ LA ចំនួន",
    "options": [
      {
        "id": "a",
        "text": "0.2ml-0.5ml"
      },
      {
        "id": "b",
        "text": "0.5ml-1ml"
      },
      {
        "id": "c",
        "text": "1ml-1.5ml"
      },
      {
        "id": "d",
        "text": "1 cartridge"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Long Buccal Nerve Block ត្រូវការថ្នាំស្ពឹកបរិមាណតិចតួចបំផុត គឺប្រមាណ 0.2 ml ទៅ 0.4 ml/0.5 ml (ប្រហែល 1/8 នៃ Cartridge)។"
  },
  {
    "id": 34,
    "category": "surgery",
    "question": "អ្នកជំងឺម្នាក់មានជំងឺលើសឈាម (Hypertension) តែគាត់មិនបានលាបថ្នាំតាមវេជ្ជបញ្ជា គាត់ត្រូវបានចាត់ចូលក្រុម ASA",
    "options": [
      {
        "id": "a",
        "text": "ASA II"
      },
      {
        "id": "b",
        "text": "ASA III"
      },
      {
        "id": "c",
        "text": "ASA IV"
      }
    ],
    "correctAnswer": "b",
    "explanation": "Uncontrolled hypertension (ជំងឺលើសឈាមធ្ងន់ធ្ងរ ឬមិនបានលេបថ្នាំ) ត្រូវចាត់ថ្នាក់ចូលក្នុង ASA Physical Status III (Severe systemic disease)។"
  },
  {
    "id": 35,
    "category": "surgery",
    "question": "ស្រ្តីមានគភ៌ខែពោះនៅខែទី3អាចធ្វើការដកធ្មេញបានដូច អ្នកជំងឺទូទៅដែរ",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: ត្រីមាសទី ១ (ខែទី៣) ជាកំឡុងពេល Organogenesis ងាយរងគ្រោះថ្នាក់បំផុត។ មិនត្រូវដកធ្មេញធម្មតាដូចទូទៅទេ គួរពន្យារពេលទៅត្រីមាសទី២ ឬក្រោយសម្រាល។"
  },
  {
    "id": 36,
    "category": "surgery",
    "question": "Surgical procedure can be performed in patient with poorly controlled diabetes",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "correctAnswer": "b",
    "explanation": "False: ការវះកាត់ចំពោះ Poorly controlled diabetes ត្រូវបានហាមឃាត់ជាបណ្តោះអាសន្ន ដោយសារប្រឈមនឹងការឆ្លងរោគធ្ងន់ធ្ងរ និងរបួសមិនងាយជា។"
  },
  {
    "id": 37,
    "category": "surgery",
    "question": "សំរាប់ការចាក់ Inferior Alveolar Nerve Block វាអាចអោយស្ពឹក Tissueទាំងអស់លើកលែងតែ",
    "options": [
      {
        "id": "a",
        "text": "Tongue"
      },
      {
        "id": "b",
        "text": "ធ្មេញពី Central Incisor ទៅ Molar"
      },
      {
        "id": "c",
        "text": "Buccal Tissue របស់ Molar"
      },
      {
        "id": "d",
        "text": "Mental Nerve"
      },
      {
        "id": "e",
        "text": "None of above"
      }
    ],
    "correctAnswer": "c",
    "explanation": "IANB មិនធ្វើឱ្យស្ពឹក Buccal Tissue របស់ Molar ទេ! ( Buccal tissue របស់ Molar ត្រូវផ្គត់ផ្គង់ដោយ Long Buccal Nerve)។"
  },
  {
    "id": 38,
    "category": "surgery",
    "question": "Buccal Advancement flap is used to",
    "options": [
      {
        "id": "a",
        "text": "Close Oro-antral communication"
      },
      {
        "id": "b",
        "text": "Sinus floor augmentation"
      },
      {
        "id": "c",
        "text": "Upper Third Molar Surgery"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "a",
    "explanation": "Buccal Advancement Flap គឺជាបច្ចេកទេសវះកាត់ចម្បងសម្រាប់ភ្ជិតប្រហោងតភ្ជាប់រវាងមាត់និង Sinus (Oro-Antral Communication / OAC)។"
  },
  {
    "id": 39,
    "category": "surgery",
    "question": "Maxillary tuberosity fracture is caused from",
    "options": [
      {
        "id": "a",
        "text": "Single and Isolated molar"
      },
      {
        "id": "b",
        "text": "Excessive force"
      },
      {
        "id": "c",
        "text": "Divergent root"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "d",
    "explanation": "កត្តាបង្កឱ្យមាន Fracture Maxillary Tuberosity រួមមាន៖ ធ្មេញ Molar នៅតែឯង (Isolated Molar), ការប្រើកម្លាំងដកខ្លាំងពេក, និងធ្មេញមានឬសកោងរីកធំ (Divergent roots)។"
  },
  {
    "id": 40,
    "category": "surgery",
    "question": "ជំងឺណាមួយដែលមិនបណ្តាលអោយមាន Xerostomia",
    "options": [
      {
        "id": "a",
        "text": "Diabetes"
      },
      {
        "id": "b",
        "text": "Hypertension"
      },
      {
        "id": "c",
        "text": "Human Immunodeficiency Virus (HIV)"
      },
      {
        "id": "d",
        "text": "Myocardial Infarction"
      }
    ],
    "correctAnswer": "d",
    "explanation": "Myocardial Infarction មិនមែនជាជំងឺដែលបណ្តាលឱ្យស្ងួតមាត់ (Xerostomia) ដោយផ្ទាល់នោះទេ។"
  },
  {
    "id": 41,
    "category": "surgery",
    "question": "មួយណាដែលមិនមែនជាគុណសម្បត្តិរបស់ multifilament suture",
    "options": [
      {
        "id": "a",
        "text": "good strength"
      },
      {
        "id": "b",
        "text": "good handling"
      },
      {
        "id": "c",
        "text": "bacterial harbors"
      },
      {
        "id": "d",
        "text": "All of above"
      }
    ],
    "correctAnswer": "c",
    "explanation": "Bacterial harbors (ការទាក់ទាញ និងផ្ដុំបាក់តេរី) គឺជា គុណវិបត្តិ (Disadvantage) របស់ Multifilament suture មិនមែនជាគុណសម្បត្តិឡើយ។"
  }
];
