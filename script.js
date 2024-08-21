function checkPhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    const resultDiv = document.getElementById('result');
    const securitySiteBtn = document.getElementById('securitySiteBtn');
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');  // 모든 비숫자 문자 제거

    const phoneData = {
    '01036645646': { id: 'aiccspai18', key: '9732830052' },
    '01087957369': { id: 'aiccspai19', key: '3714419540' },
    '01095903081': { id: 'aiccspai20', key: '9350655866' },
    '01087998016': { id: 'aiccspai21', key: '7188456257' },
    '01071154827': { id: 'aiccspai22', key: '4116742908' },
    '01077436126': { id: 'aiccspai23', key: '1218664768' },
    '01029268309': { id: 'aiccspai24', key: '7664304499' },
    '01094459024': { id: 'aiccspai25', key: '6892804462' },
    '01033000219': { id: 'aiccspai26', key: '8284256059' },
    '01089364471': { id: 'aiccspai27', key: '1658331565' },
    '01067853545': { id: 'aiccspai28', key: '5285804154' },
    '01064602593': { id: 'aiccspai29', key: '8315368088' },
    '01027950515': { id: 'aiccspai30', key: '5219354317' },
    '01026177388': { id: 'aiccspai31', key: '5368436822' },
    '01052538962': { id: 'aiccspai32', key: '7122909711' },
    '01087498894': { id: 'aiccspai33', key: '7373703672' },
    '01071446908': { id: 'aiccspai34', key: '0017158833' }
};

    if (!phoneNumber.startsWith('010') || phoneNumber.length !== 11) {
        resultDiv.innerHTML = '<div class="result-item show error-message">올바른 휴대폰 번호를 입력해주세요</div>';
        securitySiteBtn.style.display = 'none';
        return;
    }

    const data = phoneData[phoneNumber];
    if (data) {
        resultDiv.innerHTML = `
            <div class="result-item">
                보안망 ID: <span class="highlight">${data.id}</span>
                <span class="copy-icon" onclick="copyText('${data.id}', this)">📋</span>
            </div>
            <div class="result-item">
                전사툴 접근키: <span class="highlight">${data.key}</span>
            </div>
        `;
        
        setTimeout(() => {
            document.querySelectorAll('.result-item').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 200);
            });
        }, 100);
        setTimeout(() => {
            securitySiteBtn.style.display = 'block';
        }, 1000);
    } else {
        resultDiv.innerHTML = '<div class="result-item show error-message">등록되지 않은 번호입니다</div>';
        securitySiteBtn.style.display = 'none';
    }
}

function copyText(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        element.setAttribute('data-hover', '복사되었어요');
        setTimeout(() => {
            element.setAttribute('data-hover', '복사할 수 있어요');
        }, 2000);
    });
}
