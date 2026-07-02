export interface LegalContent {
  title: { ko: string; en: string };
  backToText: string;
  contentKo: string;
  contentEn: string;
}

export interface AppLegalSet {
  privacy: LegalContent;
  terms: LegalContent;
  dataDeletion: LegalContent;
}

export const appsLegalData: Record<string, AppLegalSet> = {
  buildself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to BuildSelf",
      contentKo: `<p>본 개인정보처리방침은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 제공하는 모바일 기기용 BuildSelf 앱(이하 "애플리케이션")에 적용됩니다. 본 서비스는 "있는 그대로(AS IS)" 제공됩니다.</p>
    <br>
    
    <strong>애플리케이션은 어떤 정보를 수집하며 어떻게 사용하나요?</strong>
    <p>본 애플리케이션은 계정 가입을 요구하거나 개인을 식별할 수 있는 프로필을 수집하지 않습니다. 그러나 원활한 앱 기능 작동 및 사용자 경험 개선을 위해 다음과 같은 비식별 데이터를 자동으로 수집합니다.</p>
    <ul>
        <li><strong>기기 식별자 (Installation ID):</strong> 앱의 필수 기능 작동을 위해 사용됩니다.</li>
        <li><strong>비정상 종료 로그 및 진단:</strong> 앱의 성능을 모니터링하고 버그를 수정하기 위해 Sentry를 통해 수집됩니다.</li>
        <li><strong>구매 내역:</strong> 구독 및 인앱 결제를 관리하기 위해 RevenueCat을 통해 수집됩니다.</li>
    </ul>
    <br>
    
    <strong>애플리케이션이 기기의 정확한 실시간 위치 정보를 수집하나요?</strong>
    <p>본 애플리케이션은 모바일 기기의 정확한 위치 정보를 수집하지 않습니다.</p>
    <br>
    
    <strong>제3자가 애플리케이션이 수집한 정보를 보거나 접근할 수 있나요?</strong>
    <p>서비스 제공자는 사용자의 데이터를 외부 당사자에게 판매, 거래, 또는 기타 방법으로 양도하지 않습니다. 데이터는 오직 애플리케이션을 운영하고 핵심 기능을 제공하기 위한 목적으로만 신뢰할 수 있는 제3자 서비스(Sentry, RevenueCat)와 공유됩니다.</p>
    <br>
 
    <strong>데이터 보관 및 삭제</strong>
    <p>서비스 제공자는 사용자가 애플리케이션을 사용하는 동안 및 그 이후의 합리적인 기간 동안 사용자가 제공한 데이터를 보관합니다. <strong>사용자는 수집된 데이터의 삭제를 언제든지 요청할 수 있습니다.</strong> 데이터 삭제 요청 방법에 대한 자세한 지침은 당사의 <a href="/apps/buildself/data-deletion/" target="_blank">데이터 삭제 요청 페이지</a>를 참조하거나 support@selalink.net 으로 직접 문의하시기 바랍니다.</p>
    <br>
    
    <strong>사용자의 정보 수집 거부(Opt-out) 권리는 무엇인가요?</strong>
    <p>애플리케이션을 삭제함으로써 애플리케이션의 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일 기기나 모바일 애플리케이션 마켓플레이스 또는 네트워크에서 제공하는 표준 삭제 절차를 이용하실 수 있습니다.</p>
    <br>
    
    <strong>아동</strong>
    <p>본 애플리케이션은 만 13세 미만의 아동으로부터 고의로 데이터를 수집하거나 아동을 대상으로 마케팅을 하지 않습니다.</p>
    <br>
    
    <strong>보안</strong>
    <p>서비스 제공자는 사용자 정보의 기밀성을 보호하기 위해 노력합니다. 당사는 처리하고 유지하는 정보를 보호하기 위해 물리적, 전자적, 절차적 안전 조치를 제공하고 있습니다.</p>
    <br>
    
    <strong>변경 사항</strong>
    <p>본 개인정보처리방침은 어떤 이유로든 수시로 업데이트될 수 있습니다. 서비스 제공자는 본 페이지를 새로운 개인정보처리방침으로 업데이트하여 변경 사항을 통지할 것입니다. 애플리케이션을 계속 사용하는 것은 모든 변경 사항을 승인한 것으로 간주되므로, 본 개인정보처리방침의 변경 사항을 정기적으로 확인하시기 바랍니다.</p>
    <br>
    <p>본 개인정보처리방침은 2026년 3월 5일부터 효력이 발생합니다. (최종 업데이트: 2026년 3월 16일)</p>
    <br>
    
    <strong>사용자의 동의</strong>
    <p>애플리케이션을 사용함으로써, 사용자는 현재 및 서비스 제공자가 수정한 본 개인정보처리방침에 명시된 대로 사용자의 정보를 처리하는 데 동의하는 것으로 간주됩니다.</p>
    <br>
    
    <strong>연락처</strong>
    <p>애플리케이션 사용 중 개인정보 보호와 관련하여 궁금한 점이 있거나 관행에 대한 질문이 있는 경우, 서비스 제공자에게 이메일(support@selalink.net)로 문의해 주시기 바랍니다.</p>`,
      contentEn: `<p>This privacy policy applies to the BuildSelf app (hereby referred to as "Application") for mobile devices that was created by SelaLink (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".</p>
    <br>
    
    <strong>What information does the Application obtain and how is it used?</strong>
    <p>The Application does not require account registration or collect personally identifiable profiles. However, to ensure proper functionality and improve user experience, the Application automatically collects certain non-personally identifiable data. This includes:</p>
    <ul>
        <li><strong>Device Identifiers (Installation ID):</strong> Used for essential app functionality.</li>
        <li><strong>Crash Logs & Diagnostics:</strong> Collected via Sentry to monitor app performance and fix bugs.</li>
        <li><strong>Purchase History:</strong> Collected via RevenueCat to manage subscriptions and in-app purchases.</li>
    </ul>
    <br>
    
    <strong>Does the Application collect precise real time location information of the device?</strong>
    <p>This Application does not collect precise information about the location of your mobile device.</p>
    <br>
    
    <strong>Do third parties see and/or have access to information obtained by the Application?</strong>
    <p>The Service Provider does not sell, trade, or otherwise transfer your data to outside parties. Data is only shared with trusted third-party services (such as Sentry and RevenueCat) strictly for operating the Application and providing its core features.</p>
    <br>
 
    <strong>Data Retention and Deletion</strong>
    <p>The Service Provider will retain user provided data for as long as you use the Application and for a reasonable time thereafter. <strong>You can request the deletion of your collected data at any time.</strong> For detailed instructions on how to request data deletion, please visit our <a href="/apps/buildself/data-deletion/" target="_blank">Data Deletion Request Page</a> or contact us directly at support@selalink.net.</p>
    <br>
    
    <strong>What are my opt-out rights?</strong>
    <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
    <br>
    
    <strong>Children</strong>
    <p>The Application is not used to knowingly solicit data from or market to children under the age of 13.</p>
    <br>
    
    <strong>Security</strong>
    <p>The Service Provider is concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain.</p>
    <br>
    
    <strong>Changes</strong>
    <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
    <br>
    <p>This privacy policy is effective as of 2026-03-05 (Last updated: 2026-03-16)</p>
    <br>
    
    <strong>Your Consent</strong>
    <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.</p>
    <br>
    
    <strong>Contact Us</strong>
    <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at support@selalink.net.</p>`
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to BuildSelf",
      contentKo: `<p>본 서비스 약관은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 제작한 모바일 기기용 BuildSelf 앱(이하 "애플리케이션")에 적용됩니다.</p><br>
    
    <p>애플리케이션을 다운로드하거나 사용함으로써, 귀하는 자동으로 다음 약관에 동의하게 됩니다. 애플리케이션을 사용하기 전에 본 약관을 주의 깊게 읽고 숙지할 것을 강력히 권장합니다.</p>
    
    <div><br><p>애플리케이션, 애플리케이션의 일부 또는 당사의 상표를 무단으로 복사하거나 수정하는 것은 엄격히 금지됩니다. 애플리케이션의 소스 코드를 추출하거나, 다른 언어로 번역하거나, 파생 버전을 생성하려는 어떠한 시도도 허용되지 않습니다. 애플리케이션과 관련된 모든 상표, 저작권, 데이터베이스 권리 및 기타 지적 재산권은 서비스 제공자의 자산입니다.</p></div><br>
    
    <p>서비스 제공자는 애플리케이션이 최대한 유용하고 효율적일 수 있도록 최선을 다하고 있습니다. 따라서 서비스 제공자는 언제든지 어떠한 이유로든 애플리케이션을 수정하거나 서비스에 대한 요금을 청구할 권리를 보유합니다. 서비스 제공자는 애플리케이션이나 서비스에 대한 모든 청구 금액을 귀하에게 명확히 안내할 것을 보장합니다.</p><br>
    
    <p>애플리케이션은 서비스를 제공하고 유지하기 위해 필요한 특정 사용 데이터를 저장하고 처리합니다. 휴대폰의 보안 및 애플리케이션에 대한 접근을 유지하는 것은 귀하의 책임입니다. 서비스 제공자는 기기의 공식 운영 체제에서 부과하는 소프트웨어 제한 및 제약을 제거하는 휴대폰의 탈옥(jailbreaking) 또는 루팅(rooting)을 강력히 권장하지 않습니다. 이러한 행동은 휴대폰을 악성 코드, 바이러스, 악성 프로그램에 노출시키고 휴대폰의 보안 기능을 손상시킬 수 있으며, 결과적으로 애플리케이션이 제대로 작동하지 않거나 전혀 작동하지 않을 수 있습니다.</p><br>
    
    <p>서비스 제공자는 특정 측면에 대해 책임을 지지 않음을 유의하시기 바랍니다. 애플리케이션의 일부 기능은 활성화된 인터넷 연결이 필요하며, 이는 Wi-Fi 또는 모바일 네트워크 제공업체를 통해 제공될 수 있습니다. Wi-Fi에 연결할 수 없거나 데이터 허용량을 소진하여 애플리케이션이 온전한 기능으로 작동하지 않는 경우, 서비스 제공자는 책임을 지지 않습니다.</p><br>
    
    <p>Wi-Fi 지역 밖에서 애플리케이션을 사용하는 경우, 모바일 네트워크 제공업체의 계약 조건이 계속 적용됨을 유의하시기 바랍니다. 따라서 애플리케이션에 연결하는 동안 데이터 사용에 대해 모바일 제공업체로부터 요금이 청구되거나 기타 제3자 요금이 발생할 수 있습니다. 애플리케이션을 사용함으로써, 귀하는 데이터 로밍을 비활성화하지 않고 홈 지역(즉, 지역 또는 국가) 외부에서 애플리케이션을 사용하는 경우의 로밍 데이터 요금을 포함하여 이러한 모든 요금에 대한 책임을 수용하게 됩니다. 애플리케이션을 사용하는 기기의 요금 납부자가 아닌 경우, 귀하가 요금 납부자로부터 권한을 얻은 것으로 간주합니다.</p><br>
    
    <p>마찬가지로, 서비스 제공자는 귀하의 애플리케이션 사용에 대해 항상 책임을 질 수는 없습니다. 예를 들어, 기기가 충전된 상태를 유지하도록 하는 것은 귀하의 책임입니다. 기기의 배터리가 소진되어 서비스에 접근할 수 없는 경우, 서비스 제공자는 책임을 지지 않습니다.</p><br>
    
    <p>귀하의 애플리케이션 사용에 대한 서비스 제공자의 책임과 관련하여, 애플리케이션이 항상 최신 상태이고적확하도록 노력하지만, 귀하에게 정보를 제공하기 위해 제3자가 제공하는 정보에 의존한다는 점을 유의하는 것이 중요합니다. 서비스 제공자는 귀하가 애플리케이션의 이러한 기능에 전적으로 의존함으로써 경험하는 직간접적인 손실에 대해 어떠한 책임도 지지 않습니다.</p><br>
    
    <p>서비스 제공자는 향후 애플리케이션을 업데이트할 수 있습니다. 운영 체제에 대한 요구 사항(및 애플리케이션의 가용성을 확장하기로 결정한 추가 시스템)이 변경될 수 있으며, 애플리케이션을 계속 사용하려면 업데이트를 다운로드해야 합니다. 서비스 제공자는 애플리케이션이 항상 귀하에게 적합하도록, 또는 귀하의 기기에 설치된 특정 운영 체제 버전과 호환되도록 업데이트할 것을 보장하지 않습니다. 그러나 귀하는 애플리케이션 업데이트가 제공될 때 이를 항상 수락하는 데 동의합니다. 서비스 제공자는 또한 애플리케이션 제공을 중단할 수 있으며, 종료 통지를 제공하지 않고 언제든지 사용을 종료할 수 있습니다. 다르게 안내하지 않는 한, 종료 시 (a) 본 약관에 따라 귀하에게 부여된 권리 및 라이선스는 종료되며, (b) 귀하는 애플리케이션 사용을 중단하고 (필요한 경우) 기기에서 애플리케이션을 삭제해야 합니다.</p><br>
    
    <strong>본 서비스 약관의 변경</strong>
    <p>서비스 제공자는 주기적으로 본 서비스 약관을 업데이트할 수 있습니다. 따라서 본 페이지를 정기적으로 검토하여 변경 사항을 확인하시기 바랍니다. 서비스 제공자는 본 페이지에 새로운 서비스 약관을 게시하여 변경 사항을 귀하에게 통지할 것입니다.</p><br>
    
    <p>본 서비스 약관은 2026년 3월 5일부터 효력이 발생합니다. (최종 업데이트: 2026년 3월 16일)</p><br>
    
    <strong>연락처</strong>
    <p>서비스 약관에 대한 질문이나 제안 사항이 있으시면 언제든지 support@selalink.net으로 서비스 제공자에게 문의해 주십시오.</p>`,
      contentEn: `<p>These terms and conditions apply to the BuildSelf app (hereby referred to as "Application") for mobile devices that was created by SelaLink (hereby referred to as "Service Provider") as a Freemium service.</p><br>
    
    <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.</p>
    
    <div><br><p>Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p></div><br>
    
    <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p><br>
    
    <p>The Application stores and processes certain usage data necessary in order to provide and maintain the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.</p><br>
    
    <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.</p><br>
    
    <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.</p><br>
    
    <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p><br>
    
    <p>In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.</p><br>
    
    <p>The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.</p><br>
    
    <strong>Changes to These Terms and Conditions</strong>
    <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p><br>
    
    <p>These terms and conditions are effective as of 2026-03-05 (Last updated: 2026-03-16)</p><br>
    
    <strong>Contact Us</strong>
    <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at support@selalink.net.</p>`
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to BuildSelf",
      contentKo: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Request Deletion (삭제 요청 방법)
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              <strong>셀라링크(SelaLink)</strong>의 <strong>빌드셀프(BuildSelf)</strong> 앱 사용자는 아래 이메일 주소를 통해 개인정보 및 관련 데이터 삭제를 요청하실 수 있습니다.
          </p>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">Contact Email</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
          
          <ul class="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
              <li class="flex items-start italic">
                  <span class="mr-2 text-stone-400 dark:text-stone-500">•</span>
                  <span>본인 확인 및 데이터 식별을 위해 기기 식별자 또는 결제 영수증 번호를 포함해 주세요.</span>
              </li>
          </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">수집되는 데이터 유형</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  회원가입 기능이 없어 개인 프로필은 수집하지 않으나, 원활한 서비스 제공을 위해 다음 데이터를 수집할 수 있습니다:
              </p>
              <ul class="list-disc list-outside ml-4 text-sm text-stone-600 dark:text-stone-400 space-y-1.5 marker:text-stone-400">
                  <li>기기 식별자 (Installation ID)</li>
                  <li>크래시 로그 및 성능 정보 (Sentry)</li>
                  <li>결제 이력 및 구독 상태 (RevenueCat)</li>
              </ul>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">데이터 보유 및 파기 정책</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  삭제 요청 접수 후 30일 이내에 식별 가능한 모든 데이터를 파기합니다. 단, 결제 이력 등 관련 법령에 따라 보관 의무가 있는 정보는 법정 기간 동안 별도 보관됩니다.
              </p>
          </div>
      </div>`,
      contentEn: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Request Deletion
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              Users of the <strong>BuildSelf</strong> app provided by <strong>SelaLink</strong> can request the deletion of their personal data by contacting us via email.
          </p>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">Contact Email</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
          
          <ul class="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
              <li class="flex items-start italic">
                  <span class="mr-2 text-stone-400 dark:text-stone-500">•</span>
                  <span>Please include your device identifier or payment receipt ID for verification.</span>
              </li>
          </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Types of Data Collected</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  As BuildSelf does not require an account, we do not collect personal profiles. However, the following service-related data may be collected:
              </p>
              <ul class="list-disc list-outside ml-4 text-sm text-stone-600 dark:text-stone-400 space-y-1.5 marker:text-stone-400">
                  <li>Device Identifiers (Installation ID)</li>
                  <li>Crash Logs & Diagnostic Info (Sentry)</li>
                  <li>Payment & Subscription History (RevenueCat)</li>
              </ul>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Data Retention Policy</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  Upon receiving a deletion request, all identifiable data will be permanently deleted within <strong>30 days</strong>.
                  <br><br>
                  <span class="text-xs italic text-stone-500">* Exception: Data required for legal or tax obligations (e.g., payment records) will be retained for the period specified by law.</span>
              </p>
          </div>
      </div>`
    }
  },
  freshself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to FreshSelf",
      contentKo: `<p>본 개인정보처리방침은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 제공하는 모바일 기기용 FreshSelf 앱(이하 "애플리케이션")에 적용됩니다. 본 서비스는 "있는 그대로(AS IS)" 제공됩니다.</p>
    <br>
    
    <strong>애플리케이션은 어떤 정보를 수집하며 어떻게 사용하나요?</strong>
    <p>본 애플리케이션은 사용자의 편리한 서비스 이용 및 여러 기기간 실시간 데이터 동기화를 위해 소셜 로그인 계정 정보 및 사용자가 생성한 인벤토리 데이터를 수집하며, 서비스 품질 개선을 위해 특정 비식별 로그 데이터를 수집합니다.</p>
    <ul>
        <li><strong>소셜 로그인 계정 및 프로필 정보:</strong> 소셜 로그인(카카오 등)을 통한 본인 인증 및 계정 관리를 위해 소셜 서비스 제공업체에서 제공하는 고유 사용자 식별자(ID), 닉네임, 프로필 사진 URL, 이메일 주소(선택)를 수집합니다. (Supabase 인증 시스템을 통해 안전하게 암호화 처리됩니다.)</li>
        <li><strong>사용자 생성 데이터 (인벤토리 및 공간 정보):</strong> 사용자가 애플리케이션 내에 직접 생성한 공간(Space) 정보, 아이템 정보(이름, 보관 장소, 소비기한, 메모 등), 소비/폐기 기록 등을 수집하여 안전한 클라우드 데이터베이스에 보관 및 동기화합니다.</li>
        <li><strong>기기 식별자 (Installation ID):</strong> 앱의 필수 기능 작동 및 모바일 푸시 알림 등을 전송하기 위해 기기 고유 식별자를 수집할 수 있습니다.</li>
        <li><strong>비정상 종료 로그 및 진단:</strong> 애플리케이션의 성능을 모니터링하고 예기치 못한 버그를 추적 및 수정하기 위해 Sentry를 통해 비식별 진단 데이터를 수집합니다.</li>
        <li><strong>구매 및 결제 내역:</strong> 프리미엄 구독 상태를 검증하고 인앱 상품 주문을 안정적으로 처리하기 위해 RevenueCat을 통해 수집되는 결제 영수증 번호 및 거래 식별 코드를 수집합니다.</li>
        <li><strong>서비스 개선 및 분석 (Google Analytics):</strong> 앱 내 사용자 행동 데이터(화면 방문, 버튼 클릭 등), 기기 정보(기기 모델, OS 버전 등), 대략적인 위치 정보(IP 기준 국가 및 도시) 및 기기 광고 식별자(ADID)를 수집하여 앱 서비스를 지속적으로 개선하기 위한 통계 데이터 분석용으로 활용합니다.</li>
        <li><strong>기기 카메라 및 사진 라이브러리 접근 권한 (선택):</strong> 사용자가 아이템 등록 시 카메라로 사진을 촬영하거나 갤러리에서 사진을 선택하여 등록하는 경우, 해당 기능을 지원하기 위해 기기 카메라 및 사진 보관함 권한에 접근합니다.</li>
    </ul>
    <br>
    
    <strong>애플리케이션이 기기의 정확한 실시간 위치 정보를 수집하나요?</strong>
    <p>본 애플리케이션은 모바일 기기의 정확한 위치 정보를 수집하지 않습니다.</p>
    <br>
    
    <strong>제3자가 애플리케이션이 수집한 정보를 보거나 접근할 수 있나요?</strong>
    <p>서비스 제공자는 사용자의 데이터를 외부 당사자에게 판매, 거래, 또는 기타 방법으로 양도하지 않습니다. 수집된 모든 데이터는 오직 애플리케이션을 안정적으로 운영하고 핵심 기능(실시간 데이터 동기화, 결제 검증, 버그 추적, 앱 사용 분석)을 제공하기 위한 목적으로만 신뢰할 수 있는 제3자 서비스(Supabase, Sentry, RevenueCat, Google Analytics)와 기술적으로 연동 및 공유됩니다.</p>
    <br>
 
    <strong>데이터 보관 및 삭제 (회원 탈퇴)</strong>
    <p>서비스 제공자는 사용자가 애플리케이션 서비스를 이용하는 동안 및 계정이 유지되는 동안 사용자가 제공한 데이터를 보관합니다. <strong>사용자는 언제든지 본인의 데이터 및 생성된 계정의 삭제를 요청할 수 있는 권리를 가집니다.</strong></p>
    <p>데이터 및 계정 삭제(회원 탈퇴)는 아래 두 가지 방법으로 모두 가능합니다:</p>
    <ul>
        <li><strong>앱 내부 즉시 탈퇴:</strong> 앱 내부의 [설정] > [프로필 편집] 메뉴에서 '회원 탈퇴' 버튼을 탭하여 별도의 심사 없이 즉시 계정과 모든 데이터를 데이터베이스에서 영구 파기(Hard Delete, 즉각 삭제)할 수 있습니다.</li>
        <li><strong>웹 데이터 삭제 요청:</strong> 앱을 이미 삭제하셨거나 실행할 수 없는 상태라면, 당사의 <a href="/ko/apps/freshself/data-deletion" target="_blank">데이터 삭제 요청 페이지</a>의 안내에 따라 support@selalink.net 으로 소셜 로그인 계정 정보와 함께 요청해 주시면 영업일 30일 이내에 식별 가능한 모든 데이터를 영구 파기합니다.</li>
    </ul>
    <br>
    
    <strong>사용자의 정보 수집 거부(Opt-out) 권리는 무엇인가요?</strong>
    <p>애플리케이션 내에서 회원 탈퇴를 진행하거나 모바일 기기에서 애플리케이션을 삭제함으로써 정보 수집을 중단할 수 있습니다. 모바일 기기의 표준 삭제 절차를 이용하시기 바랍니다.</p>
    <br>
    
    <strong>아동</strong>
    <p>본 애플리케이션은 만 13세 미만의 아동으로부터 고의로 데이터를 수집하거나 아동을 대상으로 마케팅을 하지 않습니다.</p>
    <br>
    
    <strong>보안</strong>
    <p>서비스 제공자는 사용자 정보의 기밀성을 안전하게 보호하기 위해 최선을 다합니다. Supabase 등을 포함한 클라우드 보안 인프라를 활용하여 물리적, 전자적, 절차적 안전 조치를 엄격히 통제하고 있습니다.</p>
    <br>
    
    <strong>변경 사항</strong>
    <p>본 개인정보처리방침은 서비스 환경 변화나 관련 법령에 맞춰 수시로 업데이트될 수 있습니다. 변경 사항 발생 시 본 페이지에 새로운 개인정보처리방침을 게시함으로써 변경 통지를 갈음하오니, 정기적으로 확인해 주시기 바랍니다.</p>
    <br>
    <p>본 개인정보처리방침은 2026년 5월 21일부터 효력이 발생합니다.</p>
    <br>
    
    <strong>사용자의 동의</strong>
    <p>애플리케이션을 다운로드 및 사용하고 소셜 로그인을 통해 회원가입을 완료하는 것은 본 개인정보처리방침의 모든 조항과 사용자 정보의 수집 및 처리에 전적으로 동의하는 것으로 간주됩니다.</p>
    <br>
    
    <strong>연락처</strong>
    <p>서비스 사용 중 개인정보 보호 관행이나 데이터 처리 및 권리 행사와 관련하여 궁금한 점이 있는 경우, 서비스 제공자에게 이메일(support@selalink.net)로 문의해 주시기 바랍니다.</p>`,
      contentEn: `<p>This privacy policy applies to the FreshSelf app (hereby referred to as "Application") for mobile devices that was created by SelaLink (hereby referred to as "Service Provider") as a Freemium service. This service is provided "AS IS".</p>
    <br>
    
    <strong>What information does the Application obtain and how is it used?</strong>
    <p>To provide smooth synchronization of your inventory data across multiple devices and ensure proper billing, the Application obtains social login profiles, user-created data, and certain non-personally identifiable diagnostic logs.</p>
    <ul>
        <li><strong>Social Login Profile & Account Details:</strong> When you register or sign in using social login (such as Kakao), we collect your unique user identifier, nickname, profile picture URL, and email address (optional) supplied by your social login provider. (This data is encrypted and handled via Supabase Auth).</li>
        <li><strong>User-Generated Sync Data:</strong> We collect and store data you directly create in the Application, such as Spaces, Items (name, location, expiry date, notes), and consumption history, to enable real-time cross-device sync.</li>
        <li><strong>Device Identifiers (Installation ID):</strong> We may collect a unique device identifier to support push notifications and core app stability.</li>
        <li><strong>Crash Logs & Diagnostics:</strong> Non-personally identifiable diagnostics are collected via Sentry to monitor performance and fix software bugs.</li>
        <li><strong>Purchase & Subscription History:</strong> Receipt identifiers and transaction status are collected via RevenueCat to verify Premium subscription status and manage payments.</li>
        <li><strong>Service Improvement & Analytics (Google Analytics):</strong> We collect user interaction data within the Application (such as screen views and button clicks), device details, approximate location, and advertising identifiers (ADID) to analyze usage patterns and improve the overall user experience.</li>
        <li><strong>Device Camera & Photo Gallery Access (Optional):</strong> If you choose to upload photos for your items, we request permission to access your device’s camera and photo gallery.</li>
    </ul>
    <br>
    
    <strong>Does the Application collect precise real time location information of the device?</strong>
    <p>This Application does not collect precise location coordinates of your mobile device.</p>
    <br>
    
    <strong>Do third parties see and/or have access to information obtained by the Application?</strong>
    <p>The Service Provider does not sell, trade, or transfer your data to outside parties. Your data is technically shared only with trusted platforms (such as Supabase, Sentry, RevenueCat, and Google Analytics) strictly for operating the Application and providing its core features.</p>
    <br>
 
    <strong>Data Retention and Deletion (Account Termination)</strong>
    <p>The Service Provider will retain user-provided data for as long as you maintain your account with the Application. <strong>You have the absolute right to delete your account and associated data at any time.</strong></p>
    <p>Account and data deletion can be requested through two pathways:</p>
    <ul>
        <li><strong>Immediate In-App Account Deletion:</strong> You can permanently delete your account and instantly purge all database records (Hard Delete) via the [Settings] > [Edit Profile] menu inside the app.</li>
        <li><strong>Web-Based Data Deletion Request:</strong> If you have already uninstalled the app or are unable to run it, please visit our <a href="/en/apps/freshself/data-deletion" target="_blank">Data Deletion Request Page</a> and contact us at support@selalink.net with your social login details. We will purge all records within 30 business days.</li>
    </ul>
    <br>
    
    <strong>What are my opt-out rights?</strong>
    <p>You can easily stop all information collection by deleting your account inside the app or uninstalling the Application using standard operating system processes.</p>
    <br>
    
    <strong>Children</strong>
    <p>The Application does not knowingly solicit data from or market to children under the age of 13.</p>
    <br>
    
    <strong>Security</strong>
    <p>The Service Provider is highly concerned about safeguarding your information. We maintain physical, electronic, and procedural safeguards utilizing cloud infrastructure to secure all processed user data.</p>
    <br>
    
    <strong>Changes</strong>
    <p>This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this policy regularly for updates.</p>
    <br>
    <p>This privacy policy is effective as of May 21, 2026.</p>
    <br>
    
    <strong>Your Consent</strong>
    <p>By downloading, registering, and using the Application, you consent to all terms of this Privacy Policy and the processing of your user data as described herein.</p>
    <br>
    
    <strong>Contact Us</strong>
    <p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at support@selalink.net.</p>`
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to FreshSelf",
      contentKo: `<p>본 서비스 이용약관은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 개발한 모바일 애플리케이션 FreshSelf(이하 "애플리케이션")의 이용 조건과 회원 간 권리 및 의무 관계를 규정합니다.</p><br>
    
    <p>애플리케이션을 다운로드하여 소셜 로그인을 통해 계정을 생성하거나 사용함으로써, 귀하는 자동으로 본 서비스 약관에 동의하게 됩니다. 서비스를 이용하시기 전에 본 약관을 주의 깊게 읽고 충분히 이해해 주시기 바랍니다.</p><br>
    
    <strong>1. 지적 재산권 및 라이선스</strong>
    <p>애플리케이션의 소스 코드, 디자인, 로고, 캐릭터, 상표, 데이터베이스 권리 등 서비스 전반에 대한 모든 지적 재산권은 서비스 제공자의 독점적 자산입니다. 사용자는 서비스를 모바일 기기에서 비상업적인 목적으로만 다운로드하고 이용할 수 있는 양도 불가능한 개인용 라이선스를 부여받습니다. 애플리케이션의 일부를 임의로 복사, 수정, 소스 코드 추출, 다른 언어로의 번역 또는 파생 버전 제작 시도는 저작권법에 의해 엄격히 금지됩니다.</p><br>
    
    <strong>2. 계정 및 동기화 보안</strong>
    <p>본 애플리케이션은 Supabase 클라우드 데이터베이스 및 소셜 인증(카카오 등)을 바탕으로 동기화 기능을 제공합니다. 소셜 로그인 연동 계정 및 기기의 보안을 안전하게 유지할 책임은 전적으로 회원 본인에게 있습니다. 탈옥(jailbreaking) 또는 루팅(rooting)된 단말기에서의 이용은 보안 우려 및 오작동 가능성으로 인해 권장하지 않으며, 이로 인해 발생한 데이터 노출이나 서비스 에러에 대해 서비스 제공자는 책임을 지지 않습니다.</p><br>
    
    <strong>3. 이용 한도 및 요금 정책 (Freemium Quota)</strong>
    <p>귀하는 애플리케이션을 무료로 이용하거나, 프리미엄 정기 구독(Premium Subscription) 상품을 구매하여 서비스 한도를 확장할 수 있습니다.</p>
    <ul>
        <li><strong>무료 (Basic) 플랜:</strong> 가벼운 개인 및 소규모 공간 관리를 원하는 사용자를 위한 등급입니다.
            <ul>
                <li>소유 가능한 공간(Space)은 **오직 1개**의 개인 비공개(프라이빗) 보관소로 제한되며, 타인을 초대하여 공유하는 기능은 제공되지 않습니다.</li>
                <li>등록 가능한 아이템은 최대 **50개**로 제한됩니다.</li>
                <li>한도 도달 시 완료된 아이템을 [기록] 탭에서 '영구 삭제(Hard Delete)'하여 무료 슬롯을 즉시 반환해야 새 아이템을 등록할 수 있습니다.</li>
            </ul>
        </li>
        <li><strong>프리미엄 (Premium) 플랜:</strong> 가족, 동료들과의 실시간 공유 동기화 및 대규모 공간 관리를 원하는 유저를 위한 플랜입니다.
            <ul>
                <li>**이용 가격:** 월 1,900원 또는 연 19,000원의 정기 결제 방식으로 구독을 시작할 수 있습니다.</li>
                <li>**혜택:** 무제한 공간 개설, 무제한 공유 초대(가족, 동료, 팀원 등), 무제한 아이템 등록이 가능합니다.</li>
            </ul>
        </li>
        <li><strong>공정 사용 정책 (Fair Usage Policy - FUP):</strong> 모든 가입자의 형평성 있고 안정적인 서비스 품질 유지를 위해 FUP 정책이 적용됩니다. 일반적인 사용 범위를 초과하여 시스템에 과도한 부하를 주는 경우, 속도가 일부 제어되거나 업로드가 일시 제한될 수 있습니다.</li>
        <li><strong>90일 자동 소각 정책:</strong> 서버 최적화를 위해 무료 및 프리미엄 등급 회원에 관계없이, 소비/폐기 처리된 지 90일이 경과한 원본 데이터와 사진은 데이터베이스에서 일괄 자동 소각됩니다.</li>
        <li><strong>작성자(Actor) 과금 원칙:</strong> 무료 사용자가 프리미엄 회원의 공유 공간에 초대받아 참가하더라도, 해당 공간에서 본인이 직접 등록한 아이템은 본인의 무료 50개 한도 슬롯에서 차감됩니다.</li>
    </ul>
    <br>
    
    <strong>4. 정기 구독 및 결제</strong>
    <p>프리미엄 구독 요금은 구글 플레이 스토어 인앱 결제망을 통해 청구됩니다. 구독은 만료 24시간 전에 직접 취소하지 않는 한 자동 갱신됩니다. 구독 결제 관리, 정기 결제 해지 및 환불 처리는 모두 구글 플레이 스토어의 결제 관리 규정과 약관에 따릅니다.</p><br>
    
    <strong>5. 구독 만료 시의 서비스 제한 정책 (Create-Only Lock)</strong>
    <p>프리미엄 구독 회원이 구독을 취소하여 무료 플랜 상태로 돌아간 경우, 사용자의 소중한 기존 데이터를 임의로 지우거나 제한하지 않습니다.
        <ul>
            <li><strong>허용 범주:</strong> 기존 공간 및 수백 개의 아이템에 대한 조회(R), 상세 정보 수정 및 폐기/소비 상태 처리(U), 영구 삭제(D) 기능은 무조건 100% 정상 작동하며 유지됩니다.</li>
            <li><strong>차단 범주:</strong> 현재 등록된 아이템/공간의 총 개수가 무료 한도를 초과해 있는 동안에는 새로운 공간 생성 및 새 아이템 생성(C) 행동만 차단됩니다.</li>
        </ul>
    </p><br>
    
    <strong>6. 회원 탈퇴 및 공간 영구 삭제 (CASCADE)</strong>
    <p>공간 소유자가 공간을 영구 삭제하거나 회원 탈퇴를 하는 경우, 해당 공간과 공간에 소속되어 있던 다른 멤버의 아이템 및 관련 소비 기록들은 데이터 정합성을 위해 데이터베이스에서 연쇄 영구 삭제(CASCADE)되어 영구히 복구할 수 없게 됩니다.</p><br>
    
    <strong>7. 책임 및 서비스 이용 제한</strong>
    <p>네트워크 연결 유실, 데이터 소진, 모바일 기기의 배터리 방전 등으로 인해 서비스 작동이 중단되는 현상에 대해 서비스 제공자는 책임을 지지 않습니다. 또한 서비스 제공자는 예기치 않은 서버 유지보수, 보안 이슈 등에 따라 사전 통지 없이 애플리케이션의 공급을 일시 중단하거나 종료할 수 있습니다.</p><br>
    
    <strong>8. 약관의 변경 및 효력</strong>
    <p>서비스 제공자는 수시로 본 서비스 약관을 업데이트할 권리를 가집니다. 약관 변경 시 본 페이지에 게시함으로써 개정 통지를 대신합니다. 계속해서 애플리케이션을 이용하시는 행위는 개정된 약관에 완전히 동의한 것으로 봅니다.</p>
    <p>본 서비스 약관은 2026년 5월 21일부터 효력이 발생합니다.</p><br>
    
    <strong>9. 연락처</strong>
    <p>서비스 약관에 대한 의문점, 건의 또는 이의 신청이 있으시면 언제든지 support@selalink.net 으로 이메일을 보내 주시기 바랍니다.</p>`,
      contentEn: `<p>These terms and conditions apply to the FreshSelf mobile application (hereby referred to as "Application") developed by SelaLink (hereby referred to as "Service Provider") as a Freemium service.</p><br>
    
    <p>By downloading, creating an account via social login, or using the Application, you automatically agree to these terms. It is strongly advised that you read and understand these terms thoroughly prior to using the Application.</p><br>
    
    <strong>1. Intellectual Property & License</strong>
    <p>All source code, designs, logos, trademarks, database rights, and other intellectual property rights related to the Application remain the exclusive property of the Service Provider. Users are granted a personal license to download and use the Application for non-commercial purposes on mobile devices. Any unauthorized copying or extracting the source code is strictly prohibited.</p><br>
    
    <strong>2. Account Security & Synchronization</strong>
    <p>The Application utilizes Supabase cloud databases and social login (such as Kakao) for real-time synchronization. It is your sole responsibility to maintain the security of your social login account and your mobile device. Using jailbroken or rooted devices is highly discouraged.</p><br>
    
    <strong>3. Quota & Billing Policies (Freemium Limits)</strong>
    <p>You can use the Application for free under the Basic Plan, or purchase a Premium Subscription to unlock extended features and higher quotas.</p>
    <ul>
        <li><strong>Basic Plan (Free):</strong> Tailored for users looking for casual personal or small space organization.
            <ul>
                <li>Limited to a maximum of **1 private Space** (sharing is not supported).</li>
                <li>Limited to a maximum of **50 Items**.</li>
                <li>Upon reaching the limit, you must permanently delete items in the [History] tab to free up slots.</li>
            </ul>
        </li>
        <li><strong>Premium Plan (Paid Subscription):</strong> A recurring subscription designed for real-time sharing (family, colleagues, teammates) and large inventories.
            <ul>
                <li>**Pricing:** Starting at KRW 1,900/month or KRW 19,000/year equivalent.</li>
                <li>**Benefits:** Unlocks unlimited spaces, unlimited sharing invitations, and unlimited items.</li>
            </ul>
        </li>
        <li><strong>Fair Usage Policy (FUP):</strong> To ensure a stable and reliable experience for all users, this Service is governed by our Fair Usage Policy (FUP). If a user's usage patterns cause extraordinary database load, rate limiting may be applied.</li>
        <li><strong>90-Day Automatic Cleanup:</strong> To optimize cloud storage, all consumed or discarded items and photos are permanently deleted from our database after 90 days, regardless of the user's tier.</li>
        <li><strong>Actor-Based Billing Principle:</strong> Even if a free user joins a shared space owned by a Premium user, any items directly created by the free user count against their own 50-item Basic limit.</li>
    </ul>
    <br>
    
    <strong>4. Subscription Billing</strong>
    <p>Premium Subscription fees are billed through the Google Play Store billing service. Subscriptions auto-renew unless canceled at least 24 hours prior to the end of the billing period.</p><br>
    
    <strong>5. Subscription Expiration Policy (Create-Only Lock)</strong>
    <p>If a Premium subscription expires and the user reverts to the Basic Plan, we do not delete or restrict access to their existing data.
        <ul>
            <li><strong>Allowed Actions:</strong> View (R) existing spaces and items, update (U) item details/consumption status, and perform deletion (D).</li>
            <li><strong>Blocked Actions:</strong> While your total item or space count exceeds the Basic limits, the creation of new items or spaces (C) will be blocked.</li>
        </ul>
    </p><br>
    
    <strong>6. Account Termination & Space Deletion (CASCADE)</strong>
    <p>If a space owner deletes a space or permanently terminates their account, that space along with all member items and histories therein will be CASCADE-deleted from our cloud databases.</p><br>
    
    <strong>7. Limitation of Liability</strong>
    <p>The Service Provider is not liable for temporary service interruptions due to lack of network connectivity, data plan exhaustion, or drained device batteries.</p><br>
    
    <strong>8. Changes to These Terms</strong>
    <p>The Service Provider may periodically update these Terms and Conditions. Updates will be published directly on this page and will take effect immediately. Continued use of the Application signifies your agreement to the modified terms.</p>
    <p>These terms and conditions are effective as of May 21, 2026.</p><br>
    
    <strong>9. Contact Us</strong>
    <p>If you have any questions or suggestions regarding these Terms and Conditions, please contact us at support@selalink.net.</p>`
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to FreshSelf",
      contentKo: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Delete Your Data (삭제 및 회원 탈퇴 방법)
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              <strong>셀라링크(SelaLink)</strong>의 <strong>FreshSelf(프레시셀프)</strong> 앱 사용자는 다음 두 가지 방법 중 원하시는 경로로 계정 탈퇴 및 관련 데이터를 완전히 삭제할 수 있습니다.
          </p>

          <div class="space-y-6">
              <div class="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 class="font-bold text-stone-900 dark:text-white">Method A: Immediate In-App Deletion (추천: 앱 내에서 즉시 탈퇴)</h3>
                  <p class="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                      앱 내의 <strong>[설정] > [프로필 편집]</strong> 화면 하단에서 <strong>'회원 탈퇴'</strong> 버튼을 클릭하면, 심사 없이 즉시 회원님의 모든 데이터와 Supabase 인증 데이터가 영구적으로 완전 파기(Hard Delete)됩니다.
                  </p>
              </div>

              <div class="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 class="font-bold text-stone-900 dark:text-white">Method B: Web Request via Email (웹에서 수동 삭제 요청)</h3>
                  <p class="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                      앱을 이미 휴대폰에서 삭제하여 실행할 수 없는 경우, 아래 이메일 주소로 수동 탈퇴 및 데이터 영구 파기 처리를 신청하실 수 있습니다.
                  </p>
              </div>
          </div>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500 mt-8">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">Contact Email</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
          
          <ul class="mt-6 space-y-3 text-sm text-stone-600 dark:text-stone-400">
              <li class="flex items-start italic">
                  <span class="mr-2 text-stone-400 dark:text-stone-500">•</span>
                  <span>이메일 신청 시, 신원 확인을 위해 사용하셨던 소셜 로그인 이메일 주소, 닉네임 또는 카카오 회원번호를 기재해 주세요.</span>
              </li>
          </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">삭제 및 파기 대상 데이터</h3>
              <ul class="list-disc list-outside ml-4 text-sm text-stone-600 dark:text-stone-400 space-y-1.5 marker:text-stone-400">
                  <li>소셜 로그인 식별값 및 닉네임 (Supabase Profile)</li>
                  <li>사용자가 생성한 공간(Space) 정보 및 공유 권한</li>
                  <li>사용자가 등록한 아이템 상세 및 소비 내역</li>
                  <li>기기 식별자 및 알림 푸시 토큰</li>
              </ul>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">예외적 보관 정책</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  모든 데이터 파기는 요청일 기준 30일 이내에 완료됩니다. 단, 결제 이력 등 관련 법령에 따라 세무/회계상의 보관 의무가 있는 정보는 법정 기간 동안 별도 보관됩니다.
              </p>
          </div>
      </div>`,
      contentEn: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Request Deletion
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              Users of the <strong>FreshSelf</strong> app provided by <strong>SelaLink</strong> can easily delete their account and associated data using two methods:
          </p>

          <div class="space-y-6">
              <div class="border-l-4 border-emerald-500 pl-4 py-1">
                  <h3 class="font-bold text-stone-900 dark:text-white">Method A: Immediate In-App Deletion (Recommended)</h3>
                  <p class="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                      You can instantly delete your account and all sync data from within the app. Open the Application, go to <strong>[Settings] > [Edit Profile]</strong>, and tap <strong>'Delete Account'</strong>.
                  </p>
              </div>

              <div class="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 class="font-bold text-stone-900 dark:text-white">Method B: Web Request via Email</h3>
                  <p class="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                      If you have already uninstalled the Application, you can request manual account and data deletion by sending an email to our support team.
                  </p>
              </div>
          </div>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500 mt-8">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">Contact Email</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Types of Data Deleted</h3>
              <ul class="list-disc list-outside ml-4 text-sm text-stone-600 dark:text-stone-400 space-y-1.5 marker:text-stone-400">
                  <li>Social login identifiers & nicknames (Supabase Profile)</li>
                  <li>User-created Space records & shared permissions</li>
                  <li>User-created Items, details, and consumption history</li>
                  <li>Installation identifiers and diagnostic tokens</li>
              </ul>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Data Retention Exceptions</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  We process all deletion requests within <strong>30 business days</strong>. Payment history and billing records must be legally archived for the period specified by tax laws.
              </p>
          </div>
      </div>`
    }
  },
  logself: {
    privacy: {
      title: { ko: "개인정보처리방침", en: "Privacy Policy" },
      backToText: "Back to logSelf",
      contentKo: `<p>본 개인정보처리방침은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 제공하는 모바일 기기용 logSelf 앱(이하 "애플리케이션")에 적용됩니다. 본 서비스는 "있는 그대로(AS IS)" 제공됩니다.</p>
    <br>
    
    <strong>100% 온디바이스 로컬 저장 및 프라이버시</strong>
    <p>본 애플리케이션은 회원가입이나 사용자 계정 생성을 요구하지 않습니다. 사용자가 입력하는 모든 일지 기록, 감정 상태, 첨부된 사진 정보, 태그 등 모든 개인 데이터는 <strong>외부 서버로 전송되거나 수집되지 않으며, 오직 사용자의 기기 내부에 암호화(SQLCipher 적용)되어 안전하게 로컬로 저장</strong>됩니다.</p>
    <br>

    <strong>애플리케이션이 요구하는 기기 권한 및 사용 목적</strong>
    <p>본 애플리케이션은 원활한 기능 작동을 위해 다음 권한을 요구할 수 있습니다. 이 권한을 통해 접근하는 정보는 기기 외부로 유출되지 않습니다.</p>
    <ul>
        <li><strong>카메라 및 사진 미디어 라이브러리 접근:</strong> 사용자가 작성하는 일지(Log)에 직접 선택한 이미지/사진을 첨부하고 기록하기 위해서만 사용됩니다.</li>
        <li><strong>인터넷 및 네트워크 상태:</strong> 사용자가 입력한 웹 링크의 미리보기 메타데이터를 로컬에서 스크랩하여 표시하기 위해 사용됩니다.</li>
        <li><strong>생체 인증 (FaceID / 지문인식):</strong> 사용자가 앱 잠금 설정을 활성화한 경우 기기 내에서 안전하게 잠금을 해제하기 위해서만 사용됩니다.</li>
        <li><strong>파일 시스템 및 문서 선택기:</strong> 사용자가 작성한 일지 데이터를 백업하고 복원하기 위해 사용됩니다.</li>
    </ul>
    <br>
    
    <strong>제3자 서비스 제공 및 데이터 위탁</strong>
    <p>본 애플리케이션은 사용자의 핵심 일지 데이터를 외부 서버로 전송하지 않으며 제3자에게 판매하거나 양도하지 않습니다. 다만, 서비스 개선 및 오류 분석을 위해 분석 도구(Google Analytics, Sentry)를 사용할 수 있습니다.</p>
    <br>
 
    <strong>데이터 보관 및 삭제</strong>
    <p>모든 데이터는 기기 내에만 저장되므로, <strong>사용자가 기기에서 애플리케이션을 삭제(앱 제거 및 데이터 삭제)하면 저장되어 있던 모든 일지 및 첨부 자료는 즉시 영구적으로 파기</strong>됩니다. 데이터 관리 및 삭제에 관한 추가 문의사항은 당사의 <a href="/ko/apps/logself/data-deletion" target="_blank">데이터 삭제 요청 페이지</a>를 참조하거나 support@selalink.net 으로 직접 문의하시기 바랍니다.</p>
    <br>
    
    <strong>아동의 프라이버시</strong>
    <p>본 애플리케이션은 만 13세 미만의 아동으로부터 고의로 데이터를 수집하거나 아동을 대상으로 마케팅을 하지 않습니다.</p>
    <br>
    
    <strong>보안</strong>
    <p>서비스 제공자는 사용자 데이터의 기밀성을 매우 중요하게 생각합니다. 기기 내 저장되는 데이터베이스는 군사 등급의 SQLCipher 암호화 아키텍처를 통해 안전하게 보호됩니다.</p>
    <br>
    
    <strong>변경 사항</strong>
    <p>본 개인정보처리방침은 수시로 업데이트될 수 있습니다. 변경 사항이 있을 경우 본 페이지를 통해 공지되며, 본 방침의 변경 이후에도 애플리케이션을 계속 사용하는 것은 변경 사항을 승인한 것으로 간주됩니다.</p>
    <br>
    <p>본 개인정보처리방침은 2026년 6월 28일부터 효력이 발생합니다.</p>
    <br>
    
    <strong>연락처</strong>
    <p>애플리케이션 사용 중 개인정보 보호와 관련하여 문의사항이 있으신 경우, 서비스 제공자에게 이메일(support@selalink.net)로 연락해 주시기 바랍니다.</p>`,
      contentEn: `<p>This privacy policy applies to the logSelf app (hereby referred to as "Application") for mobile devices, created by SelaLink (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".</p>
    <br>
    
    <strong>100% On-Device Local Storage & Privacy</strong>
    <p>The Application does not require account registration or collect personal profiles. Every log, photo, and tag you write is <strong>never sent to or collected by any external server, and is securely stored only on your local device with SQLCipher encryption</strong>.</p>
    <br>

    <strong>Device Permissions and Usage</strong>
    <p>To provide its core features, the Application may request the following permissions on your mobile device. Any information accessed via these permissions remains strictly local to your device:</p>
    <ul>
        <li><strong>Camera & Photo Library Access:</strong> Used solely to allow you to attach and display your chosen photos in your journal logs.</li>
        <li><strong>Internet & Network State:</strong> Used to fetch metadata of web links you input locally on your device.</li>
        <li><strong>Biometric Authentication (FaceID / TouchID):</strong> Used for the optional app lock feature.</li>
        <li><strong>File System & Document Picker:</strong> Used for exporting and importing your journal database.</li>
    </ul>
    <br>
    
    <strong>Do third parties see and/or have access to information?</strong>
    <p>The Service Provider does not sell, trade, or transfer your core journal data to outside parties. However, to improve service stability and analyze app usage, we use Sentry and Google Analytics for diagnostics.</p>
    <br>
 
    <strong>Data Retention and Deletion</strong>
    <p>Since all data is stored locally, <strong>uninstalling the Application from your device will instantly and permanently delete all your logs and attached media</strong>. For detailed information, please visit our <a href="/en/apps/logself/data-deletion" target="_blank">Data Deletion Request Page</a> or contact us directly at support@selalink.net.</p>
    <br>
    
    <strong>Children's Privacy</strong>
    <p>The Application is not used to knowingly solicit data from or market to children under the age of 13.</p>
    <br>
    
    <strong>Security</strong>
    <p>We care about safeguarding the confidentiality of your information. The local database stored on your device is protected using military-grade SQLCipher encryption.</p>
    <br>
    
    <strong>Changes</strong>
    <p>This Privacy Policy may be updated from time to time. You are advised to consult this Privacy Policy regularly for any changes.</p>
    <br>
    <p>This privacy policy is effective as of 2026-06-28.</p>
    <br>
    
    <strong>Contact Us</strong>
    <p>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at support@selalink.net.</p>`
    },
    terms: {
      title: { ko: "서비스 이용약관", en: "Terms of Service" },
      backToText: "Back to logSelf",
      contentKo: `<p>본 서비스 약관은 SelaLink(이하 "서비스 제공자")가 부분 유료화(Freemium) 서비스로 제작한 모바일 기기용 logSelf 앱(이하 "애플리케이션")에 적용됩니다.</p><br>
    
    <p>애플리케이션을 다운로드하거나 사용함으로써, 귀하는 자동으로 다음 약관에 동의하게 됩니다. 애플리케이션을 사용하기 전에 본 약관을 주의 깊게 읽고 숙지할 것을 강력히 권장합니다.</p>
    
    <div><br><p>애플리케이션, 애플리케이션의 일부 또는 당사의 상표를 무단으로 복사하거나 수정하는 것은 엄격히 금지됩니다. 애플리케이션의 소스 코드를 추출하거나, 다른 언어로 번역하거나, 파생 버전을 생성하려는 어떠한 시도도 허용되지 않습니다. 애플리케이션과 관련된 모든 상표, 저작권, 데이터베이스 권리 및 기타 지적 재산권은 서비스 제공자의 자산입니다.</p></div><br>
    
    <p>서비스 제공자는 애플리케이션이 최대한 유용하고 효율적일 수 있도록 최선을 다하고 있습니다. 따라서 서비스 제공자는 언제든지 어떠한 이유로든 애플리케이션을 수정하거나 서비스에 대한 요금을 청구할 권리를 보유합니다. 서비스 제공자는 애플리케이션이나 서비스에 대한 모든 청구 금액을 귀하에게 명확히 안내할 것을 보장합니다.</p><br>
    
    <p>애플리케이션은 서비스를 제공하고 유지하기 위해 필요한 특정 사용 데이터를 기기 내부적으로 저장하고 처리합니다. 휴대폰의 보안 및 애플리케이션에 대한 접근을 유지하는 것은 귀하의 책임입니다. 서비스 제공자는 기기의 공식 운영 체제에서 부과하는 소프트웨어 제한 및 제약을 제거하는 휴대폰의 탈옥(jailbreaking) 또는 루팅(rooting)을 강력히 권장하지 않습니다.</p><br>
    
    <p>서비스 제공자는 특정 측면에 대해 책임을 지지 않음을 유의하시기 바랍니다. 애플리케이션의 일부 기능(웹 링크 크롤링 등)은 활성화된 인터넷 연결이 필요하며, 이는 Wi-Fi 또는 모바일 네트워크 제공업체를 통해 제공될 수 있습니다.</p><br>
    
    <p>Wi-Fi 지역 밖에서 애플리케이션을 사용하는 경우, 모바일 네트워크 제공업체의 계약 조건이 계속 적용됨을 유의하시기 바랍니다. 따라서 애플리케이션에 연결하는 동안 데이터 사용에 대해 모바일 제공업체로부터 요금이 청구될 수 있습니다.</p><br>
    
    <p>마찬가지로, 서비스 제공자는 귀하의 애플리케이션 사용에 대해 항상 책임을 질 수는 없습니다. 예를 들어, 기기가 충전된 상태를 유지하도록 하는 것은 귀하의 책임입니다. 기기의 배터리가 소진되어 서비스에 접근할 수 없는 경우, 서비스 제공자는 책임을 지지 않습니다.</p><br>
    
    <p>귀하의 애플리케이션 사용에 대한 서비스 제공자의 책임과 관련하여, 애플리케이션이 항상 최신 상태이고 정확하도록 노력하지만, 모든 데이터가 로컬 기기 내에 독립적으로 존재하고 암호화되어 관리되므로 사용자의 기기 분실, 데이터 유실, 백업 관리 미흡으로 발생한 기록 손실에 대해 서비스 제공자는 책임을 지지 않습니다.</p><br>
    
    <p>서비스 제공자는 향후 애플리케이션을 업데이트할 수 있습니다. 귀하는 애플리케이션 업데이트가 제공될 때 이를 항상 수락하는 데 동의합니다. 서비스 제공자는 또한 애플리케이션 제공을 중단할 수 있으며, 종료 통지를 제공하지 않고 언제든지 사용을 종료할 수 있습니다.</p><br>
    
    <strong>본 서비스 약관의 변경</strong>
    <p>서비스 제공자는 주기적으로 본 서비스 약관을 업데이트할 수 있습니다. 따라서 본 페이지를 정기적으로 검토하여 변경 사항을 확인하시기 바랍니다.</p><br>
    
    <p>본 서비스 약관은 2026년 6월 28일부터 효력이 발생합니다.</p><br>
    
    <strong>연락처</strong>
    <p>서비스 약관에 대한 질문이나 제안 사항이 있으시면 언제든지 support@selalink.net으로 서비스 제공자에게 문의해 주십시오.</p>`,
      contentEn: `<p>These terms and conditions apply to the logSelf app (hereby referred to as "Application") for mobile devices, created by SelaLink (hereby referred to as "Service Provider") as a Freemium service. This service is intended for use "AS IS".</p><br>
    
    <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.</p>
    
    <div><br><p>Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted.</p></div><br>
    
    <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason.</p><br>
    
    <p>The Application stores and processes certain usage data locally in order to provide and maintain the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advises against jailbreaking or rooting your phone.</p><br>
    
    <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider.</p><br>
    
    <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage.</p><br>
    
    <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged.</p><br>
    
    <p>In terms of the Service Provider's responsibility for your use of the application, since all data is stored locally and encrypted on your device, we are not responsible for any data loss, device theft, or failure to manage backups properly.</p><br>
    
    <p>The Service Provider may wish to update the application at some point. You agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you.</p><br>
    
    <strong>Changes to These Terms and Conditions</strong>
    <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes.</p><br>
    
    <p>These terms and conditions are effective as of 2026-06-28.</p><br>
    
    <strong>Contact Us</strong>
    <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at support@selalink.net.</p>`
    },
    dataDeletion: {
      title: { ko: "데이터 삭제 요청 안내", en: "Data Deletion Request" },
      backToText: "Back to logSelf",
      contentKo: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Delete Your Data (데이터 삭제 방법)
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              <strong>로그셀프(logSelf)</strong>는 사용자의 모든 일지 기록, 사진, 설정 데이터를 <strong>100% 로컬 기기에만 보관</strong>하는 온디바이스 형태의 애플리케이션입니다. 
              서비스 제공자의 서버에 사용자의 개인정보나 데이터를 수집·저장하지 않으므로, 별도의 서버 데이터 삭제 요청을 하실 필요가 없습니다.
          </p>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">For Inquiries (문의처)</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">즉각적인 데이터 파기 방법</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  기기에서 <strong>로그셀프 앱을 삭제</strong>하면 기기 내에 생성되었던 암호화 데이터베이스(SQLite) 및 미디어 캐시가 모두 제거되어 즉시 영구 파기됩니다.
              </p>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">백업 파일 삭제 정책</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  사용자가 직접 외부 클라우드(iCloud, 구글 드라이브 등)나 파일 앱에 내보내기 한 백업 파일은 앱이 삭제되더라도 유지되므로, 해당 서비스 내에서 수동으로 직접 삭제해 주셔야 합니다.
              </p>
          </div>
      </div>`,
      contentEn: `
      <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-12 transition-colors duration-500">
          <h2 class="text-xl font-semibold mb-6 flex items-center text-slate-900 dark:text-white">
              <span class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mr-3 text-sm font-bold">!</span>
              How to Delete Your Data
          </h2>
          <p class="text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              <strong>logSelf</strong> is a local-first application where all personal logs, photos, and settings are stored <strong>strictly on your local device</strong>. 
              Since we do not operate a centralized database server, we do not collect or store any of your data on our servers.
          </p>
          
          <div class="bg-stone-50 dark:bg-[#1C1917] rounded-xl p-6 border border-dashed border-stone-300 dark:border-stone-700 text-center transition-colors duration-500">
              <p class="text-sm text-stone-500 dark:text-stone-400 mb-1 uppercase tracking-wider font-semibold text-xs">For Inquiries</p>
              <a href="mailto:support@selalink.net" class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors">support@selalink.net</a>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Instant Deletion</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  To permanently delete all your data, simply <strong>uninstall the logSelf app</strong> from your device.
              </p>
          </div>

          <div>
              <h3 class="text-lg font-bold mb-3 border-b border-stone-200 dark:border-stone-800 pb-2 text-stone-900 dark:text-white transition-colors duration-500">Deleting Backups</h3>
              <p class="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  If you have manually exported backup files to external cloud storage (e.g., iCloud, Google Drive), those files will remain in your personal cloud. You must delete them manually from those services.
              </p>
          </div>
      </div>`
    }
  }
};
