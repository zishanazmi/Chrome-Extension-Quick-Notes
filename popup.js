document.getElementById('save').addEventListener('click', function() {
  let note = document.getElementById('note').value;
  chrome.storage.sync.set({ 'note': note }, function() {
    console.log('Note saved');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('note', function(data) {
    document.getElementById('note').value = data.note || '';
  });
});
