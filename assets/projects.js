export const projects = {
  'super-marimo': {
    name: 'Super Marimo', subtitle: '반려식물과 대화하는 AIoT 에이전트', category: 'AIoT / VOICE AGENT', demo: 'marimo', repo: 'Super_Marimo',
    summary: '분리된 API·LLM·음성·센서 서비스를 연결해, 마이크 입력과 거리 감지가 TTS 재생으로 이어지는 로컬 AIoT 대화 흐름을 구성했습니다.',
    stack: ['FastAPI', 'LLM', 'STT / TTS', 'PostgreSQL'],
    flow: [['입력', '마이크 · 센서 이벤트'], ['대화 처리', 'STT → LLM → TTS'], ['상태 공유', 'API · 대화 이력 · 장치']],
    sections: [
      ['문제', '음성 대화와 센서 이벤트가 따로 동작하면, 사용자의 발화와 장치의 반응을 일관된 대화로 연결하기 어렵습니다. 식물의 상태와 대화 맥락을 함께 다루는 로컬 AIoT 서비스가 목표였습니다.'],
      ['실행', 'API 서버, LLM 서버, 음성 에이전트와 센서 입력 경로를 분리했습니다. RP2040·Wemos·프론트엔드의 입력이 대화 처리와 TTS 재생으로 이어지도록 구성하고, chat과 voice 경로를 구분했습니다.'],
      ['개인 기여와 팀의 결과', '팀은 센서·음성·웹을 연결한 대화 시스템을 만들었습니다. 저는 음성 에이전트 오케스트레이션, answer/action_proposal 계약, Windows Bridge의 PCM·VAD·재생 처리와 Wemos 트리거 연결을 담당했습니다.'],
      ['의사결정', 'TTS 재생 중 STT 입력을 억제해 자기 음성을 다시 인식하는 경로를 제어하고, 후속 발화 window로 연속 대화를 처리했습니다. LLM의 action_proposal은 허용된 runtime 설정 계약을 통과하도록 구성해 텍스트 응답과 장치 설정 변경을 구분했습니다.'],
      ['검증과 한계', '서비스 분리, 입력 경로, 계약 검증 및 재생 중 입력 억제 구조를 코드와 보고서에서 확인할 수 있습니다. 검증 범위는 로컬 장치와 서버를 연결한 대화 흐름입니다. 웹 체험은 샘플 기반 데모로, 실제 마이크·센서·모델 서버 연동과 구분합니다.'],
      ['코드와 근거', '서비스 구성은 README와 보고서, 행동 계약과 허용 설정 검증은 아래 구현 코드에서 확인할 수 있습니다.']
    ]
  },
  'heatgrid-agent': {
    name: 'HeatGrid Agent', subtitle: '지역난방 운영자의 점검 판단을 돕는 에이전트', category: 'AIoT / OPERATIONS AGENT', demo: 'heatgrid', repo: 'Heat_Grid_Agent',
    summary: '지역난방 M1 설비의 우선순위 카드와 운영 근거를 묶어, 운영자의 점검 판단을 돕는 에이전트입니다.',
    stack: ['FastAPI', 'LangGraph', 'PostgreSQL', 'pgvector'],
    flow: [['관측', 'M1 설비 · 센서 정보'], ['우선순위', '저장된 priority card'], ['운영 판단', '근거 조회 · 브리핑']],
    sections: [
      ['문제', '센서 수치만으로는 어떤 설비를 먼저 점검해야 하는지, 판단 근거가 무엇인지 파악하기 어렵습니다. 이상 징후와 관련 정보를 한 흐름에서 확인하도록 운영 판단을 지원합니다.'],
      ['실행', 'M1 설비의 저장된 priority card를 출발점으로 센서 정보, 근거 문서와 브리핑을 연결했습니다. 가상 세종31단지 매핑으로 운영 화면을 구성하며, 매 요청마다 원시 데이터를 다시 추론하는 구조는 아닙니다.'],
      ['개인 기여와 팀의 결과', '팀은 우선순위 카드와 운영 근거를 조회하는 에이전트를 만들었습니다. 저는 M1 이상탐지 보조 모델, PostgreSQL 스키마와 에이전트 루프 설계를 담당했습니다.'],
      ['의사결정', '저장된 카드와 근거를 중심으로 운영자의 조회 흐름을 구성했습니다. OpenAI 설정이 없는 환경에서는 fallback 응답을 제공하도록 했습니다. 설비를 자동 제어하는 대신 점검 판단을 지원하는 범위로 설명합니다.'],
      ['검증과 한계', '검증 범위는 M1 설비와 저장된 카드 기반 조회입니다. 과거 모델 실험 수치는 현재 서비스 구현 성능과 구분합니다. 현장 실증과 자동 제어는 포함하지 않으며, 작업지시 버튼은 mock입니다. 웹 체험은 샘플 데이터를 사용하는 데모입니다.'],
      ['코드와 근거', '지원 범위와 fallback은 README에서, 검증 조건과 인계 내용은 HANDOFF 문서에서 확인할 수 있습니다.']
    ]
  },
  'focus-on-class': {
    name: 'Focus on Class', subtitle: '웹캠 기반 수업 집중 상태 분류', category: 'COMPUTER VISION', repo: 'focus_on_class', stack: ['PyTorch', 'OpenCV', 'MediaPipe'],
    summary: '영상 기반 분류 모델을 비교하고, 실시간 화면에서 결과가 어떻게 전달되는지 살펴본 프로젝트입니다.',
    sections: [['문제', '웹캠 영상에서 집중·졸음·딴짓 상태를 분류하고, 실시간 서비스에 맞는 모델을 선택하는 과제였습니다.'], ['실행', '여러 CNN 아키텍처를 비교하고 정확도·F1과 함께 추론 시간, 모델 크기 및 파라미터 수를 검토했습니다.'], ['개인 기여와 팀의 결과', '팀의 집중 상태 분류 서비스에서 저는 8종 아키텍처의 1차 비교와 다기준 모델 선정 근거 수립을 담당했습니다.'], ['의사결정', '모델의 분류 성능만 보지 않고 실시간 추론 제약을 함께 비교했습니다. 순간 오분류가 표시를 흔드는 문제에는 여러 샘플을 모아 상태를 결정하는 방식을 사용했습니다.'], ['검증과 한계', '모델 비교는 실험 당시 평가셋과 실행 환경을 기준으로 진행했습니다. 영상 분류 결과는 학습 성과를 직접 측정하는 지표가 아니며, 실제 환경의 조명과 자세 변화에 영향을 받습니다.'], ['코드와 근거', '공개 저장소에서 데이터 처리, 모델 비교와 서비스 구성을 확인할 수 있습니다.']]
  },
  'smart-light': {
    name: 'AI 음성인식 스마트 조명', subtitle: '음성 명령을 엣지 장치의 조명 제어로', category: 'EMBEDDED / IoT', repo: null, stack: ['Arduino', 'RP2040', 'C++'],
    summary: '회로·센서·경량 음성인식 모델을 통합한 IoT-X 메이커톤 프로젝트입니다.',
    sections: [['문제', '제한된 엣지 장치에서 음성 명령을 인식하고 센서와 조명 동작을 연결하는 과제였습니다.'], ['실행', 'Arduino 기반 센서 통합과 회로·케이스 구성, 경량 음성인식 모델 학습 및 양자화를 함께 진행했습니다.'], ['개인 기여와 팀의 결과', '팀장으로 회로와 3D 프린팅 케이스 설계, 센서 통합, 소프트웨어와 음성인식 모델 개발을 맡았습니다. 팀은 IoT-X 메이커톤에서 장려상을 받았습니다.'], ['의사결정', '엣지 장치의 연산 제약을 고려해 MFE 특징과 경량 1D Conv 모델, int8 양자화를 사용했습니다.'], ['검증과 한계', '검증 범위는 메이커톤 장치와 당시 수집한 음성 데이터입니다. 실제 소음 환경과 발화자 변화에 대한 추가 검증이 필요하며, 이 페이지에서는 장치 체험을 제공하지 않습니다.'], ['코드와 근거', '이 프로젝트의 별도 공개 저장소 주소는 확인되지 않았습니다. 세부 경험과 본인 제공 자료는 연락을 통해 안내할 수 있습니다.']]
  }
};


export const sourceLinks = {
  'super-marimo': [
    ['서비스 구성 · README', 'https://github.com/jiyang-lee/Super_Marimo/blob/main/README.md'],
    ['행동 계약 · llm_action_contract.py', 'https://github.com/jiyang-lee/Super_Marimo/blob/main/api_server/services/llm_action_contract.py'],
    ['구현 보고서', 'https://github.com/jiyang-lee/Super_Marimo/tree/main/report']
  ],
  'heatgrid-agent': [
    ['지원 범위 · README', 'https://github.com/jiyang-lee/Heat_Grid_Agent/blob/main/README.md'],
    ['검증 조건 · HANDOFF', 'https://github.com/jiyang-lee/Heat_Grid_Agent/blob/main/docs/handoff/HANDOFF.md']
  ],
  'focus-on-class': [
    ['프로젝트 구성 · README', 'https://github.com/jiyang-lee/focus_on_class/blob/main/README.md']
  ]
};
