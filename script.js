
function showContent(id) {
            var sections = document.querySelectorAll('.content');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', function() {
            showContent('home'); // Display home section by default
        });

        var readMoreButtons = document.querySelectorAll('.read-more-btn');
        readMoreButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var target = this.getAttribute('data-target');
                var fullContent = document.getElementById(target);
                if (fullContent.classList.contains('hidden')) {
                    fullContent.classList.remove('hidden');
                    this.textContent = 'Read Less';
                } else {
                    fullContent.classList.add('hidden');
                    this.textContent = 'Read More';
                }
            });
        });

        function openCrmModal(action) {
            var crmOverlay = document.getElementById('crm-overlay');
            var crmModalTitle = document.getElementById('crm-modal-title');
            crmOverlay.style.display = 'flex';
            crmModalTitle.textContent = 'Record ' + action.charAt(0).toUpperCase() + action.slice(1);
        }

        function closeCrmModal() {
            var crmOverlay = document.getElementById('crm-overlay');
            crmOverlay.style.display = 'none';
        }

        function openNewStudentForm() {
            var newStudentForm = document.getElementById('new-student-form');
            newStudentForm.style.display = 'flex';
        }

        function closeNewStudentForm() {
            var newStudentForm = document.getElementById('new-student-form');
            newStudentForm.style.display = 'none';
        }

        function registerAttendance() {
            var time = document.getElementById('time').value;
            var reason = document.getElementById('reason').value;
            // Process attendance record here
            closeCrmModal();
        }

        function submitNewStudentForm() {
            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var address = document.getElementById('address').value;
            var email = document.getElementById('email').value;
            var receipt = document.getElementById('receipt').files[0];
            var paymentMethod = document.getElementById('payment-method').value;
            var accountName = document.getElementById('account-name').value;
            var bank = document.getElementById('bank').value;
            var proofOfIdentity = document.getElementById('proof-of-identity').files[0];
            // Process new student registration here
            closeNewStudentForm();
        }
        
        
        
        // currency starts
function adminFunction() {
                // Assuming the admin functionality is handled here
                alert("Admin functionality triggered!");
            }
// currency stop 
