import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/ab042fb5-57e7-411d-bcd5-4d14ffe3e1ab/.system_generated/logs/transcript_full.jsonl';
const targetPath = path.join(__dirname, 'translate_habits.js');

function recover() {
  if (!fs.existsSync(logPath)) {
    console.error('Log file not found:', logPath);
    return;
  }

  const lines = fs.readFileSync(logPath, 'utf-8').split('\n');
  
  // 라인 100 ~ 110 근처의 write_to_file을 찾습니다.
  // 이 시점은 6개 위인이 모두 등록되었으며 타국어 데이터가 온전히 살아있던 때입니다.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    try {
      const obj = JSON.parse(line);
      // step_index가 106번(실제 로그 상의 인덱스)인 write_to_file 호출을 타겟팅합니다.
      if (obj.step_index === 106 && obj.tool_calls) {
        const call = obj.tool_calls.find(c => c.name === 'write_to_file');
        if (call) {
          let code = call.args.CodeContent;
          if (code.startsWith('"') && code.endsWith('"')) {
            code = JSON.parse(code);
          }
          fs.writeFileSync(targetPath, code, 'utf-8');
          console.log(`[성공] 인덱스 106(라인 ${i})에서 translate_habits.js 복구 완료!`);
          return;
        }
      }
    } catch (e) {
      // 파싱 에러 건너뜀
    }
  }
  console.error('복구할 소스코드를 로그에서 찾지 못했습니다.');
}

recover();
