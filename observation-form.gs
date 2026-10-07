/**
 * 2026 경기 미래형 과학실 수업 공개 - 참관 신청 구글 설문 자동 생성 스크립트
 *
 * 사용법
 * 1) https://script.google.com 에서 [새 프로젝트]를 만든다.
 * 2) 이 파일의 내용을 전체 붙여넣고 저장한다.
 * 3) 함수 목록에서 createObservationForm 을 선택하고 [실행]한다. (최초 1회 권한 승인)
 * 4) 실행 로그(보기 > 로그)에 출력되는 '응답용 링크'를 선생님들께 안내한다.
 */
function createObservationForm() {
  var form = FormApp.create('[부천부곡초] 2026 경기 미래형 과학실 공개수업 참관 신청');

  form.setDescription(
    '2026 경기 미래형 과학실 수업 공개 계획에 따라 공개수업 참관을 신청받습니다.\n\n' +
    '■ 일시: 2026. 10. 20.(화) ~ 10. 28.(수) 각 13:00~13:40\n' +
    '■ 장소: 부천부곡초등학교 본관 2층 과학실\n' +
    '■ 참석 대상: 부천교육지원청 교원 중 참석 희망자\n' +
    '■ 신청 기한: 참관 희망 수업 전일까지\n\n' +
    '※ 참관을 희망하는 수업을 모두 선택해 주세요.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);       // 신청 후 수정 가능
  form.setConfirmationMessage('참관 신청이 접수되었습니다. 수업 당일 부천부곡초등학교 본관 2층 과학실에서 뵙겠습니다. 감사합니다.');

  form.addSectionHeaderItem().setTitle('1. 신청자 정보');

  form.addTextItem().setTitle('성명').setRequired(true);
  form.addTextItem().setTitle('소속 학교(기관)').setHelpText('예) 부천OO초등학교').setRequired(true);
  form.addTextItem().setTitle('직위 및 담당 학년/교과').setHelpText('예) 교사 / 5학년 담임, 과학전담').setRequired(true);
  form.addTextItem().setTitle('연락처(GOE메신저 ID 또는 전화번호)').setHelpText('일정 변경 등 안내가 필요할 때 연락드립니다.').setRequired(true);

  form.addPageBreakItem().setTitle('2. 참관 수업 선택');

  form.addCheckboxItem()
    .setTitle('참관을 희망하는 수업을 선택해 주세요. (복수 선택 가능)')
    .setChoiceValues([
      '10/20(화) 13:00~13:40 | 5학년 2학기 3. 열과 우리 생활 - 온도가 다른 두 물체가 접촉했을 때 온도 변화 탐구 (5-1, 김혜란)',
      '10/21(수) 13:00~13:40 | 4학년 2학기 3. 여러 가지 기체 - 압력에 따른 기체의 부피 변화 탐구 (김다현)',
      '10/28(수) 13:00~13:40 | 6학년 2학기 3. 연소와 소화 - 연소 후 생성되는 물질 탐구'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('특히 관심 있는 부분이 있다면 선택해 주세요. (선택)')
    .setChoiceValues([
      '무선 센서(MBL) 활용 데이터 수집',
      '실시간 그래프 등 데이터 시각화',
      '지능형과학실 on / 스마트 기기 활용',
      '학생 주도 탐구 수업 운영 방식',
      '미래형 과학실 공간·기자재 구성'
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('수업자에게 미리 묻고 싶은 점이나 요청 사항 (선택)');

  form.addPageBreakItem().setTitle('3. 개인정보 수집·이용 동의');

  form.addCheckboxItem()
    .setTitle('개인정보 수집·이용에 동의합니다.')
    .setHelpText('수집 항목: 성명, 소속, 직위, 연락처 / 이용 목적: 공개수업 참관 신청 확인 및 안내 / 보유 기간: 공개수업 종료 후 파기')
    .setChoiceValues(['동의합니다.'])
    .setRequired(true);

  Logger.log('편집용 링크: ' + form.getEditUrl());
  Logger.log('응답용 링크: ' + form.getPublishedUrl());
}
