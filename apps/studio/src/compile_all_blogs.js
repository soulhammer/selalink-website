import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scripts = [
  'compile_habit_blogs.js',
  'compile_pet_blogs.js',
  'compile_storage_blogs.js'
];

console.log('🚀 [컴파일 파이프라인] 블로그 사전 컴파일 작업을 병렬(Parallel)로 시작합니다...');
const startTime = Date.now();

function runScript(scriptName) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, scriptName);
    const child = fork(scriptPath, [], {
      env: process.env,
      stdio: 'inherit'
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`스크립트 ${scriptName} 이(가) 종료 코드 ${code} 로 실패했습니다.`));
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

try {
  await Promise.all(scripts.map(runScript));
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✨ [컴파일 완료] 모든 블로그 컴파일이 병렬로 완료되었습니다! (${elapsed}초 소요)\n`);
} catch (error) {
  console.error(`❌ [컴파일 실패] ${error.message}`);
  process.exit(1);
}
