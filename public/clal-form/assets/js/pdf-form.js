/**
 * Clal Mortgage Form - Main JavaScript
 * Handles multi-step form, validation, PDF generation, and submission
 */

(function($) {
    'use strict';

    // Global state
    const state = {
        currentStep: 1,
        totalSteps: 5,
        signaturePads: {},
        formData: {},
        pdfDoc: null,
        pdfBytes: null
    };

    // Initialize on DOM ready
    $(document).ready(function() {
        initForm();
        initSignaturePads();
        initEventListeners();
        loadPdfTemplate();
    });

    /**
     * Initialize form state
     */
    function initForm() {
        // Set current date for signature fields
        const today = new Date().toLocaleDateString('he-IL');
        $('#signature1_date, #signature2_date').val(today);

        // Update progress bar
        updateProgress();
    }

    /**
     * Initialize signature pads
     */
    function initSignaturePads() {
        const canvas1 = document.getElementById('signaturePad1');
        const canvas2 = document.getElementById('signaturePad2');

        if (canvas1) {
            resizeCanvas(canvas1);
            state.signaturePads.pad1 = new SignaturePad(canvas1, {
                backgroundColor: 'rgb(255, 255, 255)',
                penColor: 'rgb(0, 0, 0)'
            });
        }

        if (canvas2) {
            resizeCanvas(canvas2);
            state.signaturePads.pad2 = new SignaturePad(canvas2, {
                backgroundColor: 'rgb(255, 255, 255)',
                penColor: 'rgb(0, 0, 0)'
            });
        }

        // Handle window resize
        $(window).on('resize', function() {
            if (canvas1) resizeCanvas(canvas1);
            if (canvas2) resizeCanvas(canvas2);
        });
    }

    /**
     * Resize canvas to fit container
     */
    function resizeCanvas(canvas) {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth * ratio;
        canvas.height = 150 * ratio;
        canvas.style.width = container.offsetWidth + 'px';
        canvas.style.height = '150px';
        canvas.getContext('2d').scale(ratio, ratio);
    }

    /**
     * Initialize event listeners
     */
    function initEventListeners() {
        // Navigation buttons
        $('.btn-next').on('click', handleNextStep);
        $('.btn-prev').on('click', handlePrevStep);

        // Form submission
        $('#clal-mortgage-application').on('submit', handleSubmit);

        // Borrower 2 toggle
        $('#hasBorrower2').on('change', function() {
            const isChecked = $(this).is(':checked');
            $('.borrower2-fields').toggle(isChecked);
            $('.borrower2-signature').toggle(isChecked);

            if (isChecked) {
                // Copy signature date
                $('#signature2_date').val($('#signature1_date').val());
            }
        });

        // Property mortgaged toggle
        $('input[name="property_mortgaged"]').on('change', function() {
            $('.mortgage-details').toggle($(this).val() === 'yes');
        });

        // Property rented toggle
        $('input[name="property_rented"]').on('change', function() {
            $('.rent-details').toggle($(this).val() === 'yes');
        });

        // Add track 2
        $('#addTrack2').on('click', function() {
            $('#track2Container').show();
            $(this).hide();
        });

        // Clear signature buttons
        $('.btn-clear-signature').on('click', function() {
            const targetId = $(this).data('target');
            if (targetId === 'signaturePad1' && state.signaturePads.pad1) {
                state.signaturePads.pad1.clear();
            } else if (targetId === 'signaturePad2' && state.signaturePads.pad2) {
                state.signaturePads.pad2.clear();
            }
        });

        // Auto-fill signature names from borrower details
        $('#borrower1_firstName, #borrower1_lastName').on('change', updateSignatureNames);
        $('#borrower2_firstName, #borrower2_lastName').on('change', updateSignatureNames);

        // Download PDF button
        $('#downloadPdfBtn').on('click', downloadPdf);

        // Phone number formatting
        $('input[type="tel"]').on('input', function() {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 3) {
                value = value.substring(0, 3) + '-' + value.substring(3);
            }
            $(this).val(value);
        });

        // ID number validation
        $('input[pattern="\\d{9}"]').on('input', function() {
            $(this).val($(this).val().replace(/\D/g, '').substring(0, 9));
        });
    }

    /**
     * Update signature name fields
     */
    function updateSignatureNames() {
        const firstName1 = $('#borrower1_firstName').val();
        const lastName1 = $('#borrower1_lastName').val();
        $('#signature1_name').val((firstName1 + ' ' + lastName1).trim());

        const firstName2 = $('#borrower2_firstName').val();
        const lastName2 = $('#borrower2_lastName').val();
        $('#signature2_name').val((firstName2 + ' ' + lastName2).trim());
    }

    /**
     * Load PDF template
     */
    async function loadPdfTemplate() {
        try {
            const response = await fetch(clalPdfForm.pdfUrl);
            if (!response.ok) throw new Error('Failed to load PDF');

            state.pdfBytes = await response.arrayBuffer();
            console.log('PDF template loaded successfully');
        } catch (error) {
            console.error('Error loading PDF template:', error);
        }
    }

    /**
     * Handle next step
     */
    function handleNextStep() {
        // Validate current step
        if (!validateStep(state.currentStep)) {
            return;
        }

        if (state.currentStep < state.totalSteps) {
            state.currentStep++;
            showStep(state.currentStep);
            updateProgress();
            updateNavButtons();

            // Scroll to top of form
            $('html, body').animate({
                scrollTop: $('#clal-mortgage-form').offset().top - 50
            }, 300);
        }
    }

    /**
     * Handle previous step
     */
    function handlePrevStep() {
        if (state.currentStep > 1) {
            state.currentStep--;
            showStep(state.currentStep);
            updateProgress();
            updateNavButtons();
        }
    }

    /**
     * Show specific step
     */
    function showStep(step) {
        $('.clal-form-step').removeClass('active');
        $(`.clal-form-step[data-step="${step}"]`).addClass('active');

        $('.clal-step').removeClass('active completed');
        for (let i = 1; i < step; i++) {
            $(`.clal-step[data-step="${i}"]`).addClass('completed');
        }
        $(`.clal-step[data-step="${step}"]`).addClass('active');
    }

    /**
     * Update progress bar
     */
    function updateProgress() {
        const progress = (state.currentStep / state.totalSteps) * 100;
        $('.clal-progress-fill').css('width', progress + '%');
    }

    /**
     * Update navigation buttons
     */
    function updateNavButtons() {
        // Previous button
        if (state.currentStep === 1) {
            $('.btn-prev').hide();
        } else {
            $('.btn-prev').show();
        }

        // Next/Submit buttons
        if (state.currentStep === state.totalSteps) {
            $('.btn-next').hide();
            $('.btn-submit').show();
        } else {
            $('.btn-next').show();
            $('.btn-submit').hide();
        }
    }

    /**
     * Validate current step
     */
    function validateStep(step) {
        const $step = $(`.clal-form-step[data-step="${step}"]`);
        let isValid = true;
        const errors = [];

        // Clear previous errors
        $step.find('.field-error').remove();
        $step.find('.error').removeClass('error');

        // Check required fields
        $step.find('input[required], select[required], textarea[required]').each(function() {
            if (!$(this).val() || $(this).val().trim() === '') {
                isValid = false;
                markFieldError($(this));
                errors.push($(this).prev('label').text().replace(' *', ''));
            }
        });

        // Check required checkboxes
        $step.find('input[type="checkbox"][required]').each(function() {
            if (!$(this).is(':checked')) {
                isValid = false;
                markFieldError($(this).parent());
            }
        });

        // Step-specific validation
        if (step === 1) {
            // Validate ID number (Luhn algorithm for Israeli ID)
            const id = $('#borrower1_id').val();
            if (id && !validateIsraeliId(id)) {
                isValid = false;
                markFieldError($('#borrower1_id'), 'מספר תעודת זהות לא תקין');
            }

            // Validate phone
            const phone = $('#borrower1_phone').val();
            if (phone && !validatePhone(phone)) {
                isValid = false;
                markFieldError($('#borrower1_phone'), 'מספר טלפון לא תקין');
            }

            // Validate email if provided
            const email = $('#borrower1_email').val();
            if (email && !validateEmail(email)) {
                isValid = false;
                markFieldError($('#borrower1_email'), 'כתובת דוא"ל לא תקינה');
            }
        }

        if (step === 5) {
            // Validate signature
            if (state.signaturePads.pad1 && state.signaturePads.pad1.isEmpty()) {
                isValid = false;
                markFieldError($('#signaturePad1').parent(), 'נא לחתום');
            }

            // If borrower 2 is active, validate their signature
            if ($('#hasBorrower2').is(':checked') && state.signaturePads.pad2 && state.signaturePads.pad2.isEmpty()) {
                isValid = false;
                markFieldError($('#signaturePad2').parent(), 'נא לחתום');
            }
        }

        if (!isValid) {
            showValidationError(errors);
        }

        return isValid;
    }

    /**
     * Mark field with error
     */
    function markFieldError($field, message) {
        $field.addClass('error');
        if (message) {
            $field.after(`<span class="field-error">${message}</span>`);
        }
    }

    /**
     * Show validation error message
     */
    function showValidationError(errors) {
        // Scroll to first error
        const $firstError = $('.error').first();
        if ($firstError.length) {
            $('html, body').animate({
                scrollTop: $firstError.offset().top - 100
            }, 300);
        }
    }

    /**
     * Validate Israeli ID number
     */
    function validateIsraeliId(id) {
        if (!/^\d{9}$/.test(id)) return false;

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            let digit = parseInt(id[i]) * ((i % 2) + 1);
            if (digit > 9) digit -= 9;
            sum += digit;
        }
        return sum % 10 === 0;
    }

    /**
     * Validate phone number
     */
    function validatePhone(phone) {
        const cleaned = phone.replace(/[-\s]/g, '');
        return /^0\d{9}$/.test(cleaned);
    }

    /**
     * Validate email
     */
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /**
     * Collect form data
     */
    function collectFormData() {
        const $form = $('#clal-mortgage-application');
        const formData = {};

        // Collect all form inputs
        $form.find('input, select, textarea').each(function() {
            const $input = $(this);
            const name = $input.attr('name');
            if (!name) return;

            if ($input.attr('type') === 'checkbox') {
                if (name.endsWith('[]')) {
                    const baseName = name.replace('[]', '');
                    if (!formData[baseName]) formData[baseName] = [];
                    if ($input.is(':checked')) {
                        formData[baseName].push($input.val());
                    }
                } else {
                    formData[name] = $input.is(':checked');
                }
            } else if ($input.attr('type') === 'radio') {
                if ($input.is(':checked')) {
                    formData[name] = $input.val();
                }
            } else {
                formData[name] = $input.val();
            }
        });

        // Add signature data
        if (state.signaturePads.pad1 && !state.signaturePads.pad1.isEmpty()) {
            formData.signature1_data = state.signaturePads.pad1.toDataURL();
        }
        if (state.signaturePads.pad2 && !state.signaturePads.pad2.isEmpty()) {
            formData.signature2_data = state.signaturePads.pad2.toDataURL();
        }

        // Build property address
        formData.propertyAddress = [
            formData.propertyAddress,
            formData.property_city
        ].filter(Boolean).join(', ');

        // Build loan purpose string
        if (formData.loanPurpose && formData.loanPurpose.length > 0) {
            const purposeMap = {
                'family_help': 'עזרה לבן משפחה',
                'living_expenses': 'מחיה והוצאות שוטפות',
                'refinance': 'מיחזור משכנתא',
                'assisted_living': 'מעבר לדיור מוגן',
                'debt_payoff': 'סילוק הלוואה/חוב',
                'purchase': 'רכישת דירה'
            };
            formData.loanPurposeText = formData.loanPurpose.map(p => purposeMap[p] || p).join(', ');
            if (formData.loanPurposeOther) {
                formData.loanPurposeText += ', ' + formData.loanPurposeOther;
            }
        }

        return formData;
    }

    /**
     * Generate filled PDF
     */
    async function generatePdf(formData) {
        if (!state.pdfBytes) {
            console.error('PDF template not loaded');
            return null;
        }

        try {
            const { PDFDocument, rgb, StandardFonts } = PDFLib;

            // Load the PDF
            const pdfDoc = await PDFDocument.load(state.pdfBytes);
            const form = pdfDoc.getForm();

            // Get all form fields
            const fields = form.getFields();
            console.log('PDF Form Fields:', fields.map(f => f.getName()));

            // Try to fill text fields
            const fieldMapping = {
                // This mapping will need to be adjusted based on actual PDF field names
                // We'll attempt to fill by trying common patterns
            };

            // Attempt to fill fields dynamically
            fields.forEach(field => {
                const fieldName = field.getName();
                const fieldType = field.constructor.name;

                // Try to match form data to PDF fields
                // This is a best-effort approach since we don't know exact field names
                try {
                    if (fieldType === 'PDFTextField') {
                        const textField = form.getTextField(fieldName);
                        // Look for matching data
                        const matchingKey = Object.keys(formData).find(key =>
                            fieldName.toLowerCase().includes(key.toLowerCase()) ||
                            key.toLowerCase().includes(fieldName.toLowerCase())
                        );
                        if (matchingKey && formData[matchingKey]) {
                            textField.setText(String(formData[matchingKey]));
                        }
                    }
                } catch (e) {
                    // Field might be read-only or have other issues
                    console.log('Could not fill field:', fieldName, e.message);
                }
            });

            // Flatten form (make fields non-editable)
            // form.flatten();

            // Save the PDF
            const pdfBytesOutput = await pdfDoc.save();
            state.pdfDoc = pdfBytesOutput;

            return pdfBytesOutput;
        } catch (error) {
            console.error('Error generating PDF:', error);
            return null;
        }
    }

    /**
     * Download generated PDF
     */
    function downloadPdf() {
        if (!state.pdfDoc) {
            alert('לא ניתן להוריד את הקובץ');
            return;
        }

        const blob = new Blob([state.pdfDoc], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `בקשת_משכנתא_כלל_${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * Build the payload sent to Web3Forms.
     * Flattens the collected form data into readable, Hebrew-labeled fields
     * and strips the large signature base64 blobs (a flag is sent instead).
     */
    function buildWeb3FormsPayload(formData, reference) {
        const labels = {
            borrower1_firstName: 'לווה 1 - שם פרטי',
            borrower1_lastName: 'לווה 1 - שם משפחה',
            borrower1_id: 'לווה 1 - ת.ז.',
            borrower1_birthDate: 'לווה 1 - תאריך לידה',
            borrower1_gender: 'לווה 1 - מגדר',
            borrower1_maritalStatus: 'לווה 1 - מצב משפחתי',
            borrower1_phone: 'לווה 1 - טלפון',
            borrower1_email: 'לווה 1 - דוא"ל',
            borrower1_address: 'לווה 1 - כתובת',
            borrower1_city: 'לווה 1 - ישוב',
            borrower1_zipcode: 'לווה 1 - מיקוד',
            borrower1_residency: 'לווה 1 - תושבות',
            borrower1_children: 'לווה 1 - מספר ילדים',
            borrower2_firstName: 'לווה 2 - שם פרטי',
            borrower2_lastName: 'לווה 2 - שם משפחה',
            borrower2_id: 'לווה 2 - ת.ז.',
            borrower2_phone: 'לווה 2 - טלפון',
            borrower2_email: 'לווה 2 - דוא"ל',
            bankName: 'בנק', bankBranch: 'סניף', bankAccount: 'חשבון', bankAccountOwner: 'בעל החשבון',
            loanAmount: 'סכום הלוואה מבוקש', loanPurposeText: 'מטרת ההלוואה', notes: 'הערות',
            propertyAddress: 'כתובת הנכס', property_city: 'ישוב הנכס', propertyValue: 'שווי נכס משוער',
            advisor_name: 'מגיש הבקשה', advisor_phone: 'טלפון מגיש', advisor_number: 'מספר סוכן'
        };

        const borrowerName = ((formData.borrower1_firstName || '') + ' ' + (formData.borrower1_lastName || '')).trim() || 'לווה חדש';

        const payload = {
            access_key: clalPdfForm.web3formsKey,
            subject: 'בקשה חדשה להלוואת משכנתא - ' + borrowerName + ' - כלל ביטוח',
            from_name: 'טופס משכנתא כלל (' + borrowerName + ')',
            'מספר בקשה': reference
        };

        // Add curated, labeled fields (only when they have a value)
        Object.keys(labels).forEach(function (key) {
            const val = formData[key];
            if (val !== undefined && val !== null && String(val).trim() !== '') {
                payload[labels[key]] = String(val);
            }
        });

        // Signature status (never send the raw base64 image data)
        payload['חתימת לווה 1'] = formData.signature1_data ? 'נחתם' : 'לא נחתם';
        if (formData.borrower2_firstName) {
            payload['חתימת לווה 2'] = formData.signature2_data ? 'נחתם' : 'לא נחתם';
        }
        if (formData.borrower1_email) {
            payload.replyto = formData.borrower1_email;
        }

        return payload;
    }

    /**
     * Handle form submission
     */
    async function handleSubmit(e) {
        e.preventDefault();

        // Final validation
        if (!validateStep(state.currentStep)) {
            return;
        }

        // Show loading
        $('#clal-loading').show();
        $('.clal-form, .clal-progress-container').hide();

        try {
            // Collect form data
            const formData = collectFormData();
            state.formData = formData;

            // Generate the filled PDF locally so the user can download a copy
            await generatePdf(formData);

            // Build a client-side reference number (no server DB anymore)
            const reference = 'CLAL-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') +
                '-' + String(Math.floor(Math.random() * 9000) + 1000);

            // Submit to Web3Forms (emails the application to Amir).
            // Signature images are large base64 blobs - we send a flag, not the raw data.
            const payload = buildWeb3FormsPayload(formData, reference);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            // Hide loading
            $('#clal-loading').hide();

            if (result.success) {
                // Show success message
                $('#clal-success-message').show();
                $('#submission-id-display').text(reference);

                // Scroll to success message
                $('html, body').animate({
                    scrollTop: $('#clal-success-message').offset().top - 50
                }, 300);
            } else {
                // Show error
                alert((result && result.message) || clalPdfForm.strings.error);
                $('.clal-form, .clal-progress-container').show();
            }
        } catch (error) {
            console.error('Submission error:', error);
            $('#clal-loading').hide();
            $('.clal-form, .clal-progress-container').show();
            alert(clalPdfForm.strings.error);
        }
    }

})(jQuery);
