// Pegar en https://script.google.com (proyecto nuevo) y desplegar como
// "Aplicación web": Ejecutar como = Yo, Quién tiene acceso = Cualquiera.
const SHEET_ID = '1ywp8oJsLqJ03ucW84iULwDkPXlHGWFWy5uSYUqBsxCI';
const TAB = 'Convocatorias';
const COLS = ['id','nombre','entidad','fecha','estado','enlace','notas'];

function sheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(TAB);
  if (!sh) {
    sh = ss.insertSheet(TAB);
    sh.appendRow(COLS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  return json_(rows.filter(r => r[0]).map(r =>
    Object.fromEntries(COLS.map((c, i) => [c, r[i] instanceof Date
      ? Utilities.formatDate(r[i], 'UTC', 'yyyy-MM-dd') : String(r[i])]))));
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const { action, item, id } = JSON.parse(e.postData.contents);
    const sh = sheet_();
    const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues().map(r => String(r[0]));
    const row = ids.indexOf(String(id || (item && item.id)));
    if (action === 'add') {
      sh.appendRow(COLS.map(c => item[c] || ''));
    } else if (action === 'update' && row > 0) {
      sh.getRange(row + 1, 1, 1, COLS.length).setValues([COLS.map(c => item[c] || '')]);
    } else if (action === 'delete' && row > 0) {
      sh.deleteRow(row + 1);
    }
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
