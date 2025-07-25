// --- Element References ---
const loginPage = document.getElementById('login-page');
const loginForm = document.getElementById('login-form');
const appContainer = document.getElementById('app-container');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');

const navInvoice = document.getElementById('nav-invoice');
const navPayments = document.getElementById('nav-payments');
const navHistory = document.getElementById('nav-history');
const navReports = document.getElementById('nav-reports');
const navSettings = document.getElementById('nav-settings');
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const sidebarCompanyName = document.querySelector('.sidebar-logo'); // Corrected to target the logo text

const invoiceSection = document.getElementById('invoice-section');
const paymentsSection = document.getElementById('payments-section');
const historySection = document.getElementById('history-section');
const reportsSection = document.getElementById('reports-section');
const settingsSection = document.getElementById('settings-section');

// Invoice Form elements
const displayCompanyName = document.getElementById('display-company-name');
const displayCompanyAddress = document.getElementById('display-company-address');
const displayCompanyGSTIN = document.getElementById('display-company-gstin');
const displayCompanyPAN = document.getElementById('display-company-pan');
const displayCompanyPhone = document.getElementById('display-company-phone');

const customerNameInput = document.getElementById('customer-name');
const customerAddressInput = document.getElementById('customer-address');
const customerPANInput = document.getElementById('customer-pan');
const customerGSTINInput = document.getElementById('customer-gstin');
const invoiceNumberInput = document.getElementById('invoiceNumber'); // Corrected ID
const invoiceDateInput = document.getElementById('invoice-date');
const transportModeInput = document.getElementById('transport-mode');
const vehicleNumberInput = document.getElementById('vehicle-number');
const dateOfSupplyInput = document.getElementById('date-of-supply');
const placeOfSupplyCityInput = document.getElementById('place-of-supply-city');
const placeOfSupplyStateInput = document.getElementById('place-of-supply-state');
const placeOfSupplyResults = document.getElementById('place-of-supply-city-results');

const saveCustomerBtn = document.getElementById('save-customer-btn');
const clearCustomerBtn = document.getElementById('clear-customer-btn');
const customerNameResults = document.getElementById('customer-name-results');

const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item-btn');

const subTotalSpan = document.getElementById('sub-total');
const totalItemDiscountSpan = document.getElementById('total-item-discount'); // Corrected ID
const overallDiscountInput = document.getElementById('overall-discount-input');
const totalTaxableValueSpan = document.getElementById('total-taxable-value'); // New element
const cgstRateSpan = document.getElementById('cgst-rate');
const cgstAmountSpan = document.getElementById('cgst-amount');
const sgstRateSpan = document.getElementById('sgst-rate');
const sgstAmountSpan = document.getElementById('sgst-amount');
const igstRateSpan = document.getElementById('igst-rate');
const igstAmountSpan = document.getElementById('igst-amount');
const grandTotalSpan = document.getElementById('grand-total');


const generateInvoiceBtn = document.getElementById('generate-invoice-btn');
const resetFormBtn = document.getElementById('reset-form-btn');

const invoicePreview = document.getElementById('invoice-preview');
const invoiceActions = document.querySelector('.invoice-actions');
const printInvoiceBtn = document.getElementById('print-invoice-btn');
const downloadInvoicePdfBtn = document.getElementById('download-invoice-pdf-btn');
const saveInvoiceBtn = document.getElementById('save-invoice-btn');
const newInvoiceBtn = document.getElementById('new-invoice-btn');
const shareInvoiceBtn = document.getElementById('share-invoice-btn');

// Preview elements
const previewCompanyMainTitle = document.getElementById('preview-company-main-title');
const previewCompanySlogan = document.getElementById('preview-company-slogan');
const previewCompanyAddress = document.getElementById('preview-company-address');
const previewCompanyPhone = document.getElementById('preview-company-phone');
const previewCompanyGSTIN = document.getElementById('preview-company-gstin');
const previewCompanyPAN = document.getElementById('preview-company-pan');
const previewInvoiceNumber = document.getElementById('preview-invoice-number');
const previewInvoiceDate = document.getElementById('preview-invoice-date');
const previewTransportMode = document.getElementById('preview-transport-mode');
const previewVehicleNumber = document.getElementById('preview-vehicle-number');
const previewDateOfSupply = document.getElementById('preview-date-of-supply');
const previewPlaceOfSupply = document.getElementById('preview-place-of-supply');
const previewPlaceOfSupplyStateOnly = document.getElementById('preview-place-of-supply-state-only'); // Corrected ID

const previewCustomerName = document.getElementById('preview-customer-name');
const previewCustomerAddress = document.getElementById('preview-customer-address');
const previewCustomerPAN = document.getElementById('preview-customer-pan');
const previewCustomerGSTIN = document.getElementById('preview-customer-gstin');
const previewItemList = document.getElementById('preview-item-list');
const amountInWordsSpan = document.getElementById('amount-in-words');

const previewSubTotal = document.getElementById('preview-sub-total');
const previewTotalItemDiscount = document.getElementById('preview-total-item-discount'); // Corrected ID
const previewOverallDiscount = document.getElementById('preview-overall-discount');
const previewTotalTaxableValue = document.getElementById('preview-total-taxable-value'); // New element
const previewCgstAmount = document.getElementById('preview-cgst-amount');
const previewSgstAmount = document.getElementById('preview-sgst-amount');
const previewIgstAmount = document.getElementById('preview-igst-amount');
const previewGrandTotal = document.getElementById('preview-grand-total');

const previewBankName = document.getElementById('preview-bank-name');
const previewBankAccountNumber = document.getElementById('preview-bank-account-number');
const previewBankIfscCode = document.getElementById('preview-bank-ifsc-code');
const previewCompanyNameBottom = document.getElementById('preview-company-name-bottom');
const watermarkElement = document.getElementById('watermark-text');

// Payments elements
const paymentInvoiceDisplay = document.getElementById('payment-invoice-display'); // New element to display selected invoice number
const paymentDateInput = document.getElementById('payment-date');
const paymentAmountInput = document.getElementById('payment-amount');
const paymentMethodSelect = document.getElementById('payment-method');
const paymentNotesTextarea = document.getElementById('payment-notes');
const recordPaymentBtn = document.getElementById('record-payment-btn');
const paymentHistoryList = document.getElementById('payment-history-list');
const noPaymentData = document.getElementById('no-payment-data');
const paymentCustomerInput = document.getElementById('payment-customer'); // Corrected ID based on your HTML

// History elements
const historyInvoiceNumberSearch = document.getElementById('history-invoice-number-search');
const historyCustomerNameSearch = document.getElementById('history-customer-name-search');
const historyDateFrom = document.getElementById('history-date-from');
const historyDateTo = document.getElementById('history-date-to');
const historyFilterBtn = document.getElementById('history-filter-btn');
const historyResetBtn = document.getElementById('history-reset-btn');
const invoiceHistoryList = document.getElementById('invoice-history-list');
const noHistoryData = document.getElementById('no-history-data');

// Reports elements
const reportDateFrom = document.getElementById('report-date-from');
const reportDateTo = document.getElementById('report-date-to');
const generateReportBtn = document.getElementById('generate-report-btn');
const salesSummaryTable = document.getElementById('sales-summary-table');
const reportTotalSales = document.getElementById('report-total-sales');
const reportTotalDiscount = document.getElementById('report-total-discount');
const reportTaxableAmount = document.getElementById('report-taxable-amount');
const gstCollectedTable = document.getElementById('gst-collected-table');
const reportSgstCollected = document.getElementById('report-sgst-collected');
const reportCgstCollected = document.getElementById('report-cgst-collected');
const reportIgstCollected = document.getElementById('report-igst-collected');
const exportReportBtn = document.getElementById('export-report-btn');

// Settings elements
const settingCompanyName = document.getElementById('setting-company-name');
const settingCompanyAddress = document.getElementById('setting-company-address');
const settingCompanyGSTIN = document.getElementById('setting-company-gstin');
const settingCompanyPAN = document.getElementById('setting-company-pan');
const settingCompanyPhone = document.getElementById('setting-company-phone');
const settingBankName = document.getElementById('setting-bank-name');
const settingAccountNumber = document.getElementById('setting-account-number');
const settingIfscCode = document.getElementById('setting-ifsc-code');
const settingCgstRate = document.getElementById('setting-cgst-rate');
const settingSgstRate = document.getElementById('setting-sgst-rate');
const settingIgstRate = document.getElementById('setting-igst-rate');
const saveSettingsBtn = document.getElementById('save-settings-btn');

// Message Box elements
const messageBoxOverlay = document.getElementById('message-box-overlay');
const messageBoxTitle = document.getElementById('message-box-title');
const messageBoxText = document.getElementById('message-box-text');
const messageBoxOkBtn = document.getElementById('message-box-ok-btn');

// --- Global Data Stores ---
let customers = JSON.parse(localStorage.getItem('customers')) || [];
let itemsData = JSON.parse(localStorage.getItem('itemsData')) || {}; // Store items with HSN/description
let itemCounter = 0;
let invoiceData = null; // To store current invoice data for PDF generation
let savedInvoices = JSON.parse(localStorage.getItem('savedInvoices')) || [];
let payments = JSON.parse(localStorage.getItem('payments')) || []; // New: To store payment records

// Default Company and Bank Details
const DEFAULT_COMPANY_DETAILS = {
    name: "GUPTA BEADS",
    address: "A-502 Ram Nivas CHS Ltd., Tapovan, Ram Balakdas Nagari, Malad (E), Mumbai - 400094",
    gstin: "27ALMPG5428K1ZR",
    pan: "ALMPG5428K",
    phone: "9892369334",
    slogan: "MANUFACTURERS ALL TYPES OF PLASTIC BEADS"
};
const DEFAULT_BANK_DETAILS = {
    bankName: "ICICI Bank",
    accountNumber: "123456789012",
    ifscCode: "ICIC0000001"
};
const DEFAULT_TAX_RATES = {
    cgst: 6,
    sgst: 6,
    igst: 12
};

let COMPANY_DETAILS = JSON.parse(localStorage.getItem('companyDetails')) || DEFAULT_COMPANY_DETAILS;
let BANK_DETAILS = JSON.parse(localStorage.getItem('bankDetails')) || DEFAULT_BANK_DETAILS;
let TAX_RATES = JSON.parse(localStorage.getItem('taxRates')) || DEFAULT_TAX_RATES;

// Tier 1 and Tier 2 cities of India with their states (Updated 2024-2025)
const indianCities = [
    { city: "Mumbai", state: "Maharashtra" }, { city: "Delhi", state: "Delhi" }, { city: "Bengaluru", state: "Karnataka" },
    { city: "Hyderabad", state: "Telangana" }, { city: "Ahmedabad", state: "Gujarat" }, { city: "Chennai", state: "Tamil Nadu" },
    { city: "Kolkata", state: "West Bengal" }, { city: "Surat", state: "Gujarat" }, { city: "Pune", state: "Maharashtra" },
    { city: "Jaipur", state: "Rajasthan" }, { city: "Lucknow", state: "Uttar Pradesh" }, { city: "Kanpur", state: "Uttar Pradesh" },
    { city: "Nagpur", state: "Maharashtra" }, { city: "Indore", state: "Madhya Pradesh" }, { city: "Thane", state: "Maharashtra" },
    { city: "Bhopal", state: "Madhya Pradesh" }, { city: "Visakhapatnam", state: "Andhra Pradesh" }, { city: "Pimpri-Chinchwad", state: "Maharashtra" },
    { city: "Patna", state: "Bihar" }, { city: "Vadodara", state: "Gujarat" }, { city: "Ghaziabad", state: "Uttar Pradesh" },
    { city: "Ludhiana", state: "Punjab" }, { city: "Agra", "state": "Uttar Pradesh" }, { city: "Nashik", state: "Maharashtra" },
    { city: "Faridabad", state: "Haryana" }, { city: "Meerut", state: "Uttar Pradesh" }, { city: "Rajkot", state: "Gujarat" },
    { city: "Kalyan-Dombivali", state: "Maharashtra" }, { city: "Vasai-Virar", state: "Maharashtra" }, { city: "Varanasi", state: "Uttar Pradesh" },
    { city: "Srinagar", state: "Jammu and Kashmir" }, { city: "Aurangabad", state: "Maharashtra" }, { city: "Dhanbad", state: "Jharkhand" },
    { city: "Amritsar", state: "Punjab" }, { city: "Navi Mumbai", state: "Maharashtra" }, { city: "Allahabad", state: "Uttar Pradesh" },
    { city: "Howrah", state: "West Bengal" }, { city: "Ranchi", state: "Jharkhand" }, { city: "Jabalpur", state: "Madhya Pradesh" },
    { city: "Coimbatore", state: "Tamil Nadu" }, { city: "Gwalior", state: "Madhya Pradesh" }, { city: "Vijayawada", state: "Andhra Pradesh" },
    { city: "Jodhpur", state: "Rajasthan" }, { city: "Madurai", state: "Tamil Nadu" }, { city: "Raipur", state: "Chhattisgarh" },
    { city: "Kota", state: "Rajasthan" }, { city: "Guwahati", state: "Assam" }, { city: "Chandigarh", state: "Chandigarh" },
    { city: "Hubli-Dharwad", state: "Karnataka" }, { city: "Amravati", state: "Maharashtra" }, { city: "Moradabad", state: "Uttar Pradesh" },
    { city: "Mysuru", state: "Karnataka" }, { city: "Bareilly", state: "Uttar Pradesh" }, { city: "Gurgaon", state: "Haryana" },
    { city: "Aligarh", state: "Uttar Pradesh" }, { city: "Bhubaneswar", state: "Odisha" }, { city: "Salem", state: "Tamil Nadu" },
    { city: "Warangal", state: "Telangana" }, { city: "Mira-Bhayandar", state: "Maharashtra" }, { city: "Thiruvananthapuram", state: "Kerala" },
    { city: "Bhiwandi", state: "Maharashtra" }, { city: "Saharanpur", state: "Uttar Pradesh" }, { city: "Guntur", state: "Andhra Pradesh" },
    { city: "Amravati", state: "Maharashtra" }, { city: "Bikaner", state: "Rajasthan" }, { city: "Noida", state: "Uttar Pradesh" },
    { city: "Jamshedpur", state: "Jharkhand" }, { city: "Bhilai", state: "Chhattisgarh" }, { city: "Cuttack", state: "Odisha" },
    { city: "Firozabad", state: "Uttar Pradesh" }, { city: "Kochi", state: "Kerala" }, { city: "Nellore", state: "Andhra Pradesh" },
    { city: "Bhavnagar", state: "Gujarat" }, { city: "Dehradun", state: "Uttarakhand" }, { city: "Durgapur", state: "West Bengal" },
    { city: "Asansol", state: "West Bengal" }, { city: "Nanded", state: "Maharashtra" }, { city: "Kolhapur", state: "Maharashtra" },
    { city: "Ajmer", state: "Rajasthan" }, { city: "Gulbarga", state: "Karnataka" }, { city: "Jamnagar", state: "Gujarat" },
    { city: "Ujjain", state: "Madhya Pradesh" }, { city: "Loni", state: "Uttar Pradesh" }, { city: "Siliguri", state: "West Bengal" },
    { city: "Jhansi", state: "Uttar Pradesh" }, { city: "Ulhasnagar", state: "Maharashtra" }, { city: "Jammu", state: "Jammu and Kashmir" },
    { city: "Sangli-Miraj & Kupwad", state: "Maharashtra" }, { city: "Malegaon", state: "Maharashtra" }, { city: "Gaya", state: "Bihar" },
    { city: "Jalgaon", state: "Maharashtra" }, { city: "Udaipur", state: "Rajasthan" }, { city: "Maheshtala", state: "West Bengal" },
    { city: "Tirunelveli", state: "Tamil Nadu" }, { city: "Malappuram", state: "Kerala" }, { city: "Akola", state: "Maharashtra" },
    { city: "Kurnool", state: "Andhra Pradesh" }, { city: "Rajpur Sonarpur", state: "West Bengal" }, { city: "Bokaro Steel City", state: "Jharkhand" },
    { city: "South Dumdum", state: "West Bengal" }, { city: "Bellary", state: "Karnataka" }, { city: "Patiala", state: "Punjab" },
    { city: "Gopalpur", state: "West Bengal" }, { city: "Agartala", state: "Tripura" }, { city: "Bhagalpur", state: "Bihar" },
    { city: "Muzaffarnagar", state: "Uttar Pradesh" }, { city: "Bhatpara", state: "West Bengal" }, { city: "Panihati", state: "West Bengal" },
    { city: "Latur", state: "Maharashtra" }, { city: "Dhule", state: "Maharashtra" }, { city: "Rohtak", state: "Haryana" },
    { city: "Korba", state: "Chhattisgarh" }, { city: "Bhilwara", state: "Rajasthan" }, { city: "Berhampur", state: "Odisha" },
    { city: "Ahmednagar", state: "Maharashtra" }, { city: "Mathura", state: "Uttar Pradesh" }, { city: "Kollam", state: "Kerala" },
    { city: "Avadi", state: "Tamil Nadu" }, { city: "Kadapa", state: "Andhra Pradesh" }, { city: "Kamalpur", state: "Tripura" },
    { city: "Rampur", state: "Uttar Pradesh" }, { city: "Shahjahanpur", state: "Uttar Pradesh" }, { city: "Tiruvottiyur", state: "Tamil Nadu" },
    { city: "Bidar", state: "Karnataka" }, { city: "Satna", state: "Madhya Pradesh" }, { city: "Muktsar", state: "Punjab" },
    { city: "Jalandhar", state: "Punjab" }
];

// GST State Codes (for validation and tax calculation)
const gstStateCodes = {
    "01": "Jammu and Kashmir", "02": "Himachal Pradesh", "03": "Punjab", "04": "Chandigarh",
    "05": "Uttarakhand", "06": "Haryana", "07": "Delhi", "08": "Rajasthan", "09": "Uttar Pradesh",
    "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh", "13": "Nagaland", "14": "Manipur",
    "15": "Mizoram", "16": "Tripura", "17": "Meghalaya", "18": "Assam", "19": "West Bengal",
    "20": "Jharkhand", "21": "Odisha", "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
    "25": "Daman and Diu", "26": "Dadra and Nagar Haveli", "27": "Maharashtra", "28": "Andhra Pradesh (Old)",
    "29": "Karnataka", "30": "Goa", "31": "Lakshadweep", "32": "Kerala", "33": "Tamil Nadu",
    "34": "Puducherry", "35": "Andaman and Nicobar Islands", "36": "Telangana", "37": "Andhra Pradesh (New)",
    "38": "Ladakh"
};

// --- Utility Functions ---

/**
 * Displays a custom message box instead of native alert/confirm.
 * @param {string} title - The title of the message box.
 * @param {string} message - The message content.
 * @param {function} [callback] - Optional callback function to execute when OK is clicked.
 */
function showMessageBox(title, message, callback) {
    messageBoxTitle.textContent = title;
    messageBoxText.textContent = message;
    messageBoxOverlay.classList.remove('hidden');
    // Force reflow to ensure transition plays
    void messageBoxOverlay.offsetWidth;
    messageBoxOverlay.classList.add('show');

    messageBoxOkBtn.onclick = () => {
        messageBoxOverlay.classList.remove('show');
        // Give a brief moment for the transition to start before hiding completely
        setTimeout(() => {
            messageBoxOverlay.classList.add('hidden');
            if (callback) callback();
        }, 300); // Match CSS transition duration
    };
}

/**
 * Generates a unique invoice number based on the current date and a daily counter.
 * Format: INV-YYMMDD-XXXX
 * @returns {string} The generated invoice number.
 */
function generateInvoiceNumber() {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    let todayCounterKey = `invoiceCounter_${year}${month}${day}`;
    let counter = parseInt(localStorage.getItem(todayCounterKey) || '0');

    counter++;
    localStorage.setItem(todayCounterKey, counter.toString());
    return `INV-${year}${month}${day}-${counter.toString().padStart(4, '0')}`;
}

/**
 * Formats a Date object or string into YYYY-MM-DD format for input fields.
 * @param {Date|string} date - The date to format.
 * @returns {string} The formatted date string.
 */
function formatDateForInput(date) {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Formats a date string (YYYY-MM-DD or DD/MM/YYYY) into DD/MM/YYYY for display.
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    if (dateString.includes('-')) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
    return dateString; // Already in DD/MM/YYYY
}

/**
 * Formats a number as a currency string (₹ X.XX).
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string.
 */
function formatCurrency(amount) {
    if (isNaN(amount) || amount === null) return '₹ 0.00';
    return `₹ ${parseFloat(amount).toFixed(2)}`;
}

/**
 * Converts a number into Indian Rupees words format.
 * @param {number} num - The number to convert.
 * @returns {string} The number in words.
 */
function convertNumberToWords(num) {
    if (num === null || isNaN(num)) return '';
    num = Math.abs(num); // Ensure positive number for conversion

    const integerPart = Math.floor(num);
    const decimalPart = Math.round((num - integerPart) * 100);

    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function inWords(n) {
        if (n === 0) return '';
        if ((n = n.toString()).length > 9) return 'overflow';
        const s = ('000000000' + n).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!s) return '';
        let str = '';
        str += (s[1] != 0) ? (a[Number(s[1])] || b[s[1][0]] + ' ' + a[s[1][1]]) + 'crore ' : '';
        str += (s[2] != 0) ? (a[Number(s[2])] || b[s[2][0]] + ' ' + a[s[2][1]]) + 'lakh ' : '';
        str += (s[3] != 0) ? (a[Number(s[3])] || b[s[3][0]] + ' ' + a[s[3][1]]) + 'thousand ' : '';
        str += (s[4] != 0) ? (a[Number(s[4])] || b[s[4][0]] + ' ' + a[s[4][1]]) + 'hundred ' : '';
        str += (s[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(s[5])] || b[s[5][0]] + ' ' + a[s[5][1]]) : '';
        return str;
    }

    let words = inWords(integerPart);
    if (words) {
        words = words.trim() + ' Rupees ';
    }
    if (decimalPart > 0) {
        words += (words ? 'and ' : '') + inWords(decimalPart).trim() + ' Paisa ';
    }
    return words.trim() + ' Only.';
}

/**
 * Extracts the state name from a GSTIN.
 * @param {string} gstin - The GSTIN string.
 * @returns {string} The state name or "Unknown State".
 */
function getStateFromGSTIN(gstin) {
    if (gstin && gstin.length >= 2) {
        const stateCode = gstin.substring(0, 2);
        return gstStateCodes[stateCode] || "Unknown State";
    }
    return "";
}

/**
 * Extracts the state code from a GSTIN.
 * @param {string} gstin - The GSTIN string.
 * @returns {string} The 2-digit state code.
 */
function getGstinStateCode(gstin) {
    if (gstin && gstin.length >= 2) {
        return gstin.substring(0, 2);
    }
    return '';
}

// --- Login/Logout Functionality ---

/**
 * Checks authentication status and displays the appropriate UI (login or app).
 */
function checkAuth() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        loginPage.classList.add('hidden');
        appContainer.classList.remove('hidden');
        sidebar.classList.remove('hidden-mobile'); // Ensure sidebar is visible on large screens
        setActiveNav(navInvoice); // Set initial active nav
        loadSettings(); // Load settings on app start
        updateCompanyDisplay(); // Update company details in invoice section and sidebar
        // Initialize invoice number and date on load (after settings loaded)
        invoiceNumberInput.value = generateInvoiceNumber();
        invoiceDateInput.value = formatDateForDisplay(formatDateForInput(new Date()));
        dateOfSupplyInput.value = formatDateForDisplay(formatDateForInput(new Date()));
        if (itemList.children.length === 0) { // Only add if no rows exist (e.g. after a full reset)
            createItemRow(); // Add initial item row
        }
        updateTaxRatesBasedOnGSTIN(); // Initial tax rate setup
        customerNameInput.focus(); // Autofocus customer name input
    } else {
        loginPage.classList.remove('hidden');
        // Add class for login form animation
        document.querySelector('#login-page .max-w-sm').classList.add('login-form-active'); // Corrected selector
        appContainer.classList.add('hidden');
        sidebar.classList.add('hidden-mobile'); // Ensure sidebar is hidden on small screens before login
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password') { // Hardcoded for demo
        localStorage.setItem('loggedIn', 'true');
        checkAuth();
    } else {
        showMessageBox('Login Failed', 'Invalid username or password.');
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    checkAuth();
});

// --- Hamburger Menu ---
hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden-mobile');
    sidebar.classList.toggle('show-sidebar');
    hamburgerMenu.classList.toggle('active'); // Toggle active class for icon animation
});

// Close sidebar when a nav item is clicked on mobile
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1023) { // Check if it's a tablet/mobile view (lg breakpoint)
            sidebar.classList.add('hidden-mobile');
            sidebar.classList.remove('show-sidebar');
            hamburgerMenu.classList.remove('active');
        }
    });
});

// --- Navigation Functionality ---

/**
 * Sets the active navigation link and displays the corresponding content section.
 * @param {HTMLElement} activeLink - The navigation link element to set as active.
 */
function setActiveNav(activeLink) {
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
    showContentSection(activeLink.id.replace('nav-', '') + '-section');
}

/**
 * Shows the content section corresponding to the given ID.
 * Performs specific actions when navigating to certain sections.
 * @param {string} sectionId - The ID of the section to show.
 */
function showContentSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Specific actions for each section
    if (sectionId === 'history-section') {
        renderInvoiceHistory();
    } else if (sectionId === 'reports-section') {
        // Clear previous report data when navigating to reports
        reportTotalSales.textContent = formatCurrency(0);
        reportTotalDiscount.textContent = formatCurrency(0);
        reportTaxableAmount.textContent = formatCurrency(0);
        reportSgstCollected.textContent = formatCurrency(0);
        reportCgstCollected.textContent = formatCurrency(0);
        reportIgstCollected.textContent = formatCurrency(0);
        reportDateFrom.value = '';
        reportDateTo.value = '';
    } else if (sectionId === 'settings-section') {
        loadSettings();
    } else if (sectionId === 'payments-section') {
        renderPaymentHistory();
        flatpickr(paymentDateInput, { dateFormat: "d/m/Y", defaultDate: "today" });
        // Clear payment form when navigating to it
        paymentInvoiceDisplay.value = ''; // Clear display
        recordPaymentBtn.removeAttribute('data-invoice-number'); // Clear the associated invoice number
        paymentAmountInput.value = '';
        paymentMethodSelect.value = 'Cash';
        paymentNotesTextarea.value = '';
        paymentCustomerInput.value = ''; // Clear customer input
    } else if (sectionId === 'invoice-section') {
        customerNameInput.focus(); // Autofocus when invoice section is active
    }

    // Reset invoice generation state when navigating away from invoice section
    if (sectionId !== 'invoice-section') {
        generateInvoiceBtn.disabled = false; // Re-enable generate button
        invoicePreview.classList.add('hidden'); // Hide preview
        invoiceActions.classList.add('hidden'); // Hide actions
        invoiceData = null; // Clear invoice data
    }
}

navInvoice.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav(navInvoice);
});
navPayments.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav(navPayments);
});
navHistory.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav(navHistory);
});
navReports.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav(navReports);
});
navSettings.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav(navSettings);
});

// --- Date Pickers Initialization ---
flatpickr(invoiceDateInput, { dateFormat: "d/m/Y", defaultDate: "today" });
flatpickr(dateOfSupplyInput, { dateFormat: "d/m/Y", defaultDate: "today" });
flatpickr(historyDateFrom, { dateFormat: "d/m/Y", allowInput: true });
flatpickr(historyDateTo, { dateFormat: "d/m/Y", allowInput: true });
flatpickr(reportDateFrom, { dateFormat: "d/m/Y", allowInput: true });
flatpickr(reportDateTo, { dateFormat: "d/m/Y", allowInput: true });

// --- Customer Details & Autocomplete ---

saveCustomerBtn.addEventListener('click', () => {
    const name = customerNameInput.value.trim();
    const address = customerAddressInput.value.trim();
    const pan = customerPANInput.value.trim().toUpperCase();
    const gstin = customerGSTINInput.value.trim().toUpperCase();

    if (!name) {
        showMessageBox('Error', 'Receiver Name cannot be empty.');
        return;
    }
    if (gstin && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gstin)) {
        showMessageBox('Validation Error', 'Invalid GSTIN format. It should be 15 alphanumeric characters.');
        return;
    }
    if (pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) { // PAN validation
        showMessageBox('Validation Error', 'Invalid Receiver PAN format. It should be 10 alphanumeric characters (e.g., ABCDE1234F).');
        return;
    }

    let customerExists = false;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].name.toLowerCase() === name.toLowerCase()) {
            customers[i] = { name, address, pan, gstin };
            customerExists = true;
            break;
        }
    }
    if (!customerExists) {
        customers.push({ name, address, pan, gstin });
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    showMessageBox('Success', 'Receiver details saved!');
});

clearCustomerBtn.addEventListener('click', () => {
    customerNameInput.value = '';
    customerAddressInput.value = '';
    customerPANInput.value = '';
    customerGSTINInput.value = '';
    transportModeInput.value = '';
    vehicleNumberInput.value = '';
    dateOfSupplyInput.value = formatDateForDisplay(formatDateForInput(new Date()));
    placeOfSupplyCityInput.value = '';
    placeOfSupplyStateInput.value = '';
    customerNameResults.classList.add('hidden');
    placeOfSupplyResults.classList.add('hidden');
    updateTaxRatesBasedOnGSTIN(); // Reset tax rates on clear
});

customerNameInput.addEventListener('input', () => {
    const query = customerNameInput.value.toLowerCase();
    customerNameResults.innerHTML = '';
    if (query.length > 0) {
        const filteredCustomers = customers.filter(customer =>
            customer.name.toLowerCase().includes(query)
        );
        if (filteredCustomers.length > 0) {
            filteredCustomers.forEach(customer => {
                const div = document.createElement('div');
                div.textContent = customer.name;
                div.classList.add('px-3', 'py-2', 'cursor-pointer', 'hover:bg-blue-100');
                div.addEventListener('click', () => {
                    customerNameInput.value = customer.name;
                    customerAddressInput.value = customer.address;
                    customerPANInput.value = customer.pan || '';
                    customerGSTINInput.value = customer.gstin;
                    customerNameResults.classList.add('hidden');
                    customerNameInput.focus();
                    updateTaxRatesBasedOnGSTIN(); // Update tax rates on customer select
                });
                customerNameResults.appendChild(div);
            });
            customerNameResults.classList.remove('hidden');
        } else {
            customerNameResults.classList.add('hidden');
        }
    } else {
        customerNameResults.classList.add('hidden');
    }
});

document.addEventListener('click', (e) => {
    if (!customerNameInput.contains(e.target) && !customerNameResults.contains(e.target)) {
        customerNameResults.classList.add('hidden');
    }
});

// Place of Supply Autocomplete
placeOfSupplyCityInput.addEventListener('input', () => {
    const query = placeOfSupplyCityInput.value.toLowerCase();
    placeOfSupplyResults.innerHTML = '';
    placeOfSupplyStateInput.value = ''; // Clear state when city input changes
    if (query.length > 1) {
        const filteredCities = indianCities.filter(city =>
            city.city.toLowerCase().startsWith(query)
        ).slice(0, 10);

        if (filteredCities.length > 0) {
            filteredCities.forEach(cityObj => {
                const div = document.createElement('div');
                div.textContent = `${cityObj.city}, ${cityObj.state}`;
                div.classList.add('px-3', 'py-2', 'cursor-pointer', 'hover:bg-blue-100');
                div.addEventListener('click', () => {
                    placeOfSupplyCityInput.value = cityObj.city;
                    placeOfSupplyStateInput.value = cityObj.state; // Auto-fill state
                    placeOfSupplyResults.classList.add('hidden');
                    placeOfSupplyCityInput.focus();
                });
                placeOfSupplyResults.appendChild(div);
            });
            placeOfSupplyResults.classList.remove('hidden');
        } else {
            placeOfSupplyResults.classList.add('hidden');
        }
    } else {
        placeOfSupplyResults.classList.add('hidden');
    }
});

document.addEventListener('click', (e) => {
    if (!placeOfSupplyCityInput.contains(e.target) && !placeOfSupplyResults.contains(e.target)) {
        placeOfSupplyResults.classList.add('hidden');
    }
});

customerGSTINInput.addEventListener('input', updateTaxRatesBasedOnGSTIN);

/**
 * Updates the displayed tax rates (CGST, SGST, IGST) based on the customer's GSTIN
 * relative to the company's GSTIN (intra-state vs. inter-state).
 */
function updateTaxRatesBasedOnGSTIN() {
    const customerGstin = customerGSTINInput.value.trim().toUpperCase();
    const companyGstin = COMPANY_DETAILS.gstin.trim().toUpperCase();

    const customerStateCode = getGstinStateCode(customerGstin);
    const companyStateCode = getGstinStateCode(companyGstin);

    if (customerGstin && customerGstin.length === 15 && customerStateCode === companyStateCode) {
        // Intra-state transaction (CGST + SGST)
        cgstRateSpan.textContent = TAX_RATES.cgst.toFixed(0);
        sgstRateSpan.textContent = TAX_RATES.sgst.toFixed(0);
        igstRateSpan.textContent = (0).toFixed(0); // No IGST
    } else if (customerGstin && customerGstin.length === 15 && customerStateCode !== companyStateCode) {
        // Inter-state transaction (IGST only)
        cgstRateSpan.textContent = (0).toFixed(0);
        sgstRateSpan.textContent = (0).toFixed(0);
        igstRateSpan.textContent = TAX_RATES.igst.toFixed(0);
    } else {
        // If customer GSTIN is empty or invalid, default to intra-state (B2C) from company's perspective
        // Assuming B2C is always intra-state for simplicity, as per common practice
        cgstRateSpan.textContent = TAX_RATES.cgst.toFixed(0);
        sgstRateSpan.textContent = TAX_RATES.sgst.toFixed(0);
        igstRateSpan.textContent = (0).toFixed(0);
    }
    calculateSummary(); // Recalculate summary with new tax rates
}

// --- Item List Management ---

addItemBtn.addEventListener('click', () => {
    createItemRow();
    // Scroll to the new item row
    itemList.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
});

/**
 * Creates and appends a new item row to the item list table.
 * Populates with provided item data if available (for loading saved invoices).
 * @param {object} [item={}] - Optional item data to pre-fill the row.
 */
function createItemRow(item = {}) {
    itemCounter++;
    const row = document.createElement('tr');
    row.classList.add('invoice-item-row'); // Add class for easier selection in calculateSummary
    row.setAttribute('data-id', itemCounter); // Unique ID for each row
    row.innerHTML = `
        <td class="px-2 py-1 text-center border-b border-gray-200 text-sm">${itemCounter}</td>
        <td class="px-2 py-1 border-b border-gray-200 relative">
            <textarea
                class="item-description border border-gray-300 p-2 text-sm resize-none w-full text-left"
                style="height: 30px; max-height: 30px; min-height: 30px; overflow: hidden; line-height: 1.25rem; margin-bottom: 0;"
                placeholder="Enter item description"
            >${item.description || ''}</textarea>
            <div class="item-description-results autocomplete-results absolute z-50 bg-white border border-gray-300 rounded-md shadow-md overflow-y-auto w-full hidden text-left text-sm p-2 max-h-48"></div>
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <input
                type="text"
                class="item-hsn w-full p-2 border rounded text-sm focus:ring focus:ring-blue-200"
                placeholder="HSN/SAC"
                value="${item.hsn || ''}"
            >
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <input
                type="number"
                class="item-qty w-full p-2 border rounded text-sm text-right focus:ring focus:ring-blue-200"
                value="${item.qty || 1}"
                min="1"
            >
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <input
                type="number"
                class="item-rate w-full p-2 border rounded text-sm text-right focus:ring focus:ring-blue-200"
                step="0.01"
                value="${item.rate || 0}"
                min="0"
            >
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <input
                type="text"
                class="item-discount w-full p-2 border rounded text-sm text-right focus:ring focus:ring-blue-200"
                placeholder="Amt or %"
                value="${item.discountInput !== undefined ? item.discountInput : ''}"
            >
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <div class="flex items-center justify-center h-full">
                <span class="item-amount text-sm font-medium">${formatCurrency(item.amount || 0)}</span>
            </div>
        </td>
        <td class="px-2 py-1 border-b border-gray-200">
            <div class="flex items-center justify-center h-full">
                <button
                    type="button"
                    class="remove-item-btn bg-red-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200"
                >
                    <i class="fas fa-trash-alt text-sm"></i>
                </button>
            </div>
        </td>
    `;
    itemList.appendChild(row);

    const descriptionInput = row.querySelector('.item-description');
    const hsnInput = row.querySelector('.item-hsn');
    const qtyInput = row.querySelector('.item-qty');
    const rateInput = row.querySelector('.item-rate');
    const discountInput = row.querySelector('.item-discount');
    const removeItemBtn = row.querySelector('.remove-item-btn');
    const descriptionResults = row.querySelector('.item-description-results');

    // Attach event listeners for calculations
    [qtyInput, rateInput, discountInput].forEach(input => {
        input.addEventListener('input', calculateItemRow);
    });
    // Also trigger recalculation if HSN or description change leads to autocomplete fill
    descriptionInput.addEventListener('change', calculateItemRow);
    hsnInput.addEventListener('change', calculateItemRow);
    // Auto-resize textarea
    descriptionInput.addEventListener('input', autoResizeTextarea);
    autoResizeTextarea.call(descriptionInput); // Initial resize for loaded items

    // Autocomplete for item description and HSN
    descriptionInput.addEventListener('input', () => {
        const query = descriptionInput.value.toLowerCase();
        descriptionResults.innerHTML = '';
        if (query.length > 1) {
            const filteredItems = Object.keys(itemsData).filter(key =>
                itemsData[key].description.toLowerCase().includes(query) ||
                itemsData[key].hsn.toLowerCase().includes(query)
            );
            if (filteredItems.length > 0) {
                filteredItems.forEach(key => {
                    const itemObj = itemsData[key];
                    const div = document.createElement('div');
                    div.textContent = `${itemObj.description} (HSN: ${itemObj.hsn}) - Rate: ${formatCurrency(itemObj.rate)}`;
                    div.classList.add('px-3', 'py-2', 'cursor-pointer', 'hover:bg-blue-100');
                    div.addEventListener('click', () => {
                        descriptionInput.value = itemObj.description;
                        hsnInput.value = itemObj.hsn;
                        rateInput.value = itemObj.rate;
                        descriptionResults.classList.add('hidden');
                        autoResizeTextarea.call(descriptionInput);
                        calculateItemRow.call(qtyInput); // Recalculate after filling item details
                    });
                    descriptionResults.appendChild(div);
                });
                descriptionResults.classList.remove('hidden');
            } else {
                descriptionResults.classList.add('hidden');
            }
        } else {
            descriptionResults.classList.add('hidden');
        }
    });

    // Handle HSN input to also populate description/rate if unique
    hsnInput.addEventListener('input', () => {
        const query = hsnInput.value.toLowerCase();
        if (query.length > 3) { // Require more characters for HSN search
            const matchingItems = Object.keys(itemsData).filter(key =>
                itemsData[key].hsn.toLowerCase() === query
            );
            if (matchingItems.length === 1) {
                const itemObj = itemsData[matchingItems[0]];
                descriptionInput.value = itemObj.description;
                rateInput.value = itemObj.rate;
                autoResizeTextarea.call(descriptionInput);
                calculateItemRow.call(qtyInput);
            }
        }
    });

    // Hide autocomplete results when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideAnyDescriptionAutocomplete = Array.from(document.querySelectorAll('.item-description-results')).some(resultsDiv =>
            resultsDiv.contains(e.target)
        ) || e.target.classList.contains('item-description');

        if (!isClickInsideAnyDescriptionAutocomplete) {
            document.querySelectorAll('.item-description-results').forEach(resultsDiv => {
                resultsDiv.classList.add('hidden');
            });
        }
    });

    // Remove item row
    removeItemBtn.addEventListener('click', () => {
        row.remove();
        reindexItemRows(); // Re-index S.No. after removal
        calculateSummary(); // Recalculate summary after item removal
        if (itemList.children.length === 0) { // If no rows left, add one empty row
            createItemRow();
        }
    });

    calculateItemRow.call(qtyInput); // Calculate initial amount for the new row
}

/**
 * Automatically resizes a textarea based on its content.
 */
function autoResizeTextarea() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

/**
 * Re-indexes the S.No. column for all item rows after an item is added or removed.
 */
function reindexItemRows() {
    itemCounter = 0; // Reset counter
    document.querySelectorAll('#item-list tr').forEach((row) => {
        itemCounter++;
        row.setAttribute('data-id', itemCounter);
        row.querySelector('td:first-child').textContent = itemCounter;
    });
}

/**
 * Calculates the amount for a single item row and updates its display.
 * Also saves/updates item data for autocomplete.
 */
function calculateItemRow() {
    const row = this.closest('tr');
    const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
    const rate = parseFloat(row.querySelector('.item-rate').value) || 0;
    let discountInputVal = row.querySelector('.item-discount').value.trim();
    const itemAmountCell = row.querySelector('.item-amount');

    let baseAmount = qty * rate;
    let effectiveDiscount = 0;

    if (discountInputVal.endsWith('%')) {
        const percentage = parseFloat(discountInputVal.slice(0, -1));
        if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
            effectiveDiscount = baseAmount * (percentage / 100);
        } else {
            effectiveDiscount = 0; // Use 0 for calculation if invalid percentage
            // Don't clear input, let user fix it
        }
    } else {
        effectiveDiscount = parseFloat(discountInputVal) || 0;
        if (isNaN(effectiveDiscount) || effectiveDiscount < 0) {
            effectiveDiscount = 0; // Use 0 for calculation if invalid amount
            // Don't clear input, let user fix it
        }
    }

    const itemTotal = baseAmount - effectiveDiscount;
    itemAmountCell.textContent = formatCurrency(itemTotal);

    // Save item data for autocomplete if new or updated
    const description = row.querySelector('.item-description').value.trim();
    const hsn = row.querySelector('.item-hsn').value.trim();
    // Only save if description or hsn is not empty
    if (description || hsn) {
        // Use a combination of description and HSN as a more unique key
        const key = `${description.toLowerCase()}-${hsn.toLowerCase()}`;
        // Ensure that the stored rate is the current rate from the input, not the calculated itemTotal
        itemsData[key] = { description, hsn, rate: rate };
        localStorage.setItem('itemsData', JSON.stringify(itemsData));
    }

    calculateSummary();
}

/**
 * Calculates the overall summary of the invoice (subtotal, discounts, taxes, grand total).
 */
function calculateSummary() {
    const itemRows = document.querySelectorAll(".invoice-item-row");
    let subTotalBeforeItemDiscount = 0;
    let totalItemDiscount = 0;

    itemRows.forEach(row => {
        const qty = parseFloat(row.querySelector(".item-qty")?.value || 0);
        const rate = parseFloat(row.querySelector(".item-rate")?.value || 0);
        const discountVal = row.querySelector(".item-discount")?.value || '';

        let baseAmountPerItem = qty * rate;
        let discountAmountPerItem = 0;

        if (discountVal.endsWith('%')) {
            const percentage = parseFloat(discountVal.slice(0, -1));
            if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
                discountAmountPerItem = baseAmountPerItem * (percentage / 100);
            }
        } else {
            discountAmountPerItem = parseFloat(discountVal) || 0;
            if (isNaN(discountAmountPerItem) || discountAmountPerItem < 0) {
                discountAmountPerItem = 0;
            }
        }

        subTotalBeforeItemDiscount += baseAmountPerItem;
        totalItemDiscount += discountAmountPerItem;
    });

    let overallDiscount = parseFloat(overallDiscountInput.value) || 0;
    if (isNaN(overallDiscount) || overallDiscount < 0) {
        overallDiscount = 0;
        // Don't reset input value here, let the user type if they want
    }
    // Ensure the input field displays 0 if it's currently invalid or empty, without losing focus.
    if (overallDiscountInput.value.trim() === '' || isNaN(parseFloat(overallDiscountInput.value))) {
        overallDiscountInput.value = '0';
    }


    const subTotalAfterItemDiscount = subTotalBeforeItemDiscount - totalItemDiscount;
    const totalTaxableValue = Math.max(0, subTotalAfterItemDiscount - overallDiscount);

    const cgstRate = parseFloat(cgstRateSpan.textContent) || 0;
    const sgstRate = parseFloat(sgstRateSpan.textContent) || 0;
    const igstRate = parseFloat(igstRateSpan.textContent) || 0;

    const cgstAmount = totalTaxableValue * (cgstRate / 100);
    const sgstAmount = totalTaxableValue * (sgstRate / 100);
    const igstAmount = totalTaxableValue * (igstRate / 100);

    const grandTotal = totalTaxableValue + cgstAmount + sgstAmount + igstAmount;

    // Update the DOM - Add null checks for elements
    if (subTotalSpan) subTotalSpan.textContent = formatCurrency(subTotalBeforeItemDiscount);
    if (totalItemDiscountSpan) totalItemDiscountSpan.textContent = formatCurrency(totalItemDiscount);
    // overallDiscountInput.value is already handled above
    if (totalTaxableValueSpan) totalTaxableValueSpan.textContent = formatCurrency(totalTaxableValue);
    if (cgstAmountSpan) cgstAmountSpan.textContent = formatCurrency(cgstAmount);
    if (sgstAmountSpan) sgstAmountSpan.textContent = formatCurrency(sgstAmount);
    if (igstAmountSpan) igstAmountSpan.textContent = formatCurrency(igstAmount);
    if (grandTotalSpan) grandTotalSpan.textContent = formatCurrency(grandTotal);
}

// Event listeners for summary fields
if (overallDiscountInput) overallDiscountInput.addEventListener('input', calculateSummary);

// Reset form button
if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
        if (customerNameInput) customerNameInput.value = '';
        if (customerAddressInput) customerAddressInput.value = '';
        if (customerPANInput) customerPANInput.value = '';
        if (customerGSTINInput) customerGSTINInput.value = '';
        if (transportModeInput) transportModeInput.value = '';
        if (vehicleNumberInput) vehicleNumberInput.value = '';
        if (dateOfSupplyInput) dateOfSupplyInput.value = formatDateForDisplay(formatDateForInput(new Date()));
        if (placeOfSupplyCityInput) placeOfSupplyCityInput.value = '';
        if (placeOfSupplyStateInput) placeOfSupplyStateInput.value = '';
        if (customerNameResults) customerNameResults.classList.add('hidden');
        if (placeOfSupplyResults) placeOfSupplyResults.classList.add('hidden');

        if (itemList) itemList.innerHTML = '';
        itemCounter = 0;
        createItemRow();

        if (subTotalSpan) subTotalSpan.textContent = formatCurrency(0);
        if (totalItemDiscountSpan) totalItemDiscountSpan.textContent = formatCurrency(0);
        if (totalTaxableValueSpan) totalTaxableValueSpan.textContent = formatCurrency(0);
        if (cgstAmountSpan) cgstAmountSpan.textContent = formatCurrency(0);
        if (sgstAmountSpan) sgstAmountSpan.textContent = formatCurrency(0);
        if (igstAmountSpan) igstAmountSpan.textContent = formatCurrency(0);
        if (overallDiscountInput) overallDiscountInput.value = '0.00';
        if (grandTotalSpan) grandTotalSpan.textContent = formatCurrency(0);

        if (invoiceNumberInput) invoiceNumberInput.value = generateInvoiceNumber();
        if (invoiceDateInput) invoiceDateInput.value = formatDateForDisplay(formatDateForInput(new Date()));

        updateTaxRatesBasedOnGSTIN(); // Recalculate taxes based on cleared customer GSTIN

        if (invoicePreview) invoicePreview.classList.add('hidden');
        if (invoiceActions) invoiceActions.classList.add('hidden');
        if (generateInvoiceBtn) generateInvoiceBtn.disabled = false;
        invoiceData = null;
        if (customerNameInput) customerNameInput.focus(); // Autofocus after reset
    });
}


// New invoice button (same as reset)
if (newInvoiceBtn) {
    newInvoiceBtn.addEventListener('click', () => {
        if (generateInvoiceBtn) generateInvoiceBtn.disabled = false;
        if (resetFormBtn) resetFormBtn.click();
    });
}


// --- Generate Invoice and Populate Preview ---
if (generateInvoiceBtn) generateInvoiceBtn.addEventListener('click', handleGenerateInvoiceClick);

function handleGenerateInvoiceClick() {
    if (!customerNameInput.value.trim() || !invoiceDateInput.value.trim() || !dateOfSupplyInput.value.trim() || !placeOfSupplyCityInput.value.trim()) {
        showMessageBox('Validation Error', 'Please fill in all required fields (Receiver Name, Invoice Date, Date of Supply, Place of Supply City).');
        return;
    }

    let items = [];
    let allItemsValid = true;
    document.querySelectorAll('#item-list tr').forEach(row => {
        const description = row.querySelector('.item-description')?.value.trim();
        const hsn = row.querySelector('.item-hsn')?.value.trim();
        const qty = parseFloat(row.querySelector('.item-qty')?.value) || 0;
        const rate = parseFloat(row.querySelector('.item-rate')?.value) || 0;
        const discountInputVal = row.querySelector('.item-discount')?.value.trim();

        // Validate only if the row has any content.
        // If a row is entirely empty, it's considered for removal/ignored.
        if (description === '' && hsn === '' && qty === 0 && rate === 0 && discountInputVal === '') {
            return; // Skip completely empty rows
        }

        if (!description || qty <= 0 || rate <= 0) {
            allItemsValid = false;
            return; // Mark as invalid and continue to show specific message
        }

        let itemEffectiveDiscount = 0;
        if (discountInputVal && discountInputVal.endsWith('%')) {
            const percentage = parseFloat(discountInputVal.slice(0, -1));
            if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
                itemEffectiveDiscount = (qty * rate) * (percentage / 100);
            }
        } else {
            itemEffectiveDiscount = parseFloat(discountInputVal) || 0;
            if (isNaN(itemEffectiveDiscount) || itemEffectiveDiscount < 0) {
                itemEffectiveDiscount = 0;
            }
        }
        items.push({
            description: description,
            hsn: hsn,
            qty: qty,
            rate: rate,
            discountInput: discountInputVal,
            itemDiscountAmount: parseFloat(itemEffectiveDiscount.toFixed(2)),
            amount: parseFloat(((qty * rate) - itemEffectiveDiscount).toFixed(2))
        });
    });

    if (items.length === 0) {
        showMessageBox('Validation Error', 'Please add at least one valid item with Description, Quantity > 0, and Rate > 0.');
        return;
    }

    if (!allItemsValid) {
        showMessageBox('Validation Error', 'Some item rows have invalid data. Please ensure all items have a Description, Quantity > 0, and Rate > 0.');
        return;
    }

    // Recalculate summary one last time to ensure all spans are updated before capturing data
    calculateSummary();

    // Re-read values from the DOM after calculateSummary() has updated them
    const currentSubTotal = parseFloat(subTotalSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentTotalItemDiscount = parseFloat(totalItemDiscountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentOverallDiscount = parseFloat(overallDiscountInput?.value) || 0;
    const currentTaxableValue = parseFloat(totalTaxableValueSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentCgstAmount = parseFloat(cgstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentSgstAmount = parseFloat(sgstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentIgstAmount = parseFloat(igstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
    const currentGrandTotal = parseFloat(grandTotalSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;

    invoiceData = {
        invoiceDetails: {
            invoiceNumber: invoiceNumberInput.value.trim(),
            invoiceDate: invoiceDateInput.value.trim(),
            transportMode: transportModeInput.value.trim(),
            vehicleNumber: vehicleNumberInput.value.trim(),
            dateOfSupply: dateOfSupplyInput.value.trim(),
            placeOfSupply: placeOfSupplyCityInput.value.trim()
        },
        receiverDetails: {
            name: customerNameInput.value.trim(),
            address: customerAddressInput.value.trim(),
            pan: customerPANInput.value.trim().toUpperCase(),
            gstin: customerGSTINInput.value.trim().toUpperCase()
        },
        items: items,
        summary: {
            subTotal: currentSubTotal,
            totalItemDiscount: currentTotalItemDiscount,
            overallDiscount: currentOverallDiscount,
            taxableValue: currentTaxableValue, // Store calculated taxable value
            cgstRate: parseFloat(cgstRateSpan?.textContent),
            cgstAmount: currentCgstAmount,
            sgstRate: parseFloat(sgstRateSpan?.textContent),
            sgstAmount: currentSgstAmount,
            igstRate: parseFloat(igstRateSpan?.textContent),
            igstAmount: currentIgstAmount,
            grandTotal: currentGrandTotal,
        },
        company: COMPANY_DETAILS, // Use global COMPANY_DETAILS
        bank: BANK_DETAILS,     // Use global BANK_DETAILS
    };

    populateInvoicePreview(invoiceData);
    if (invoicePreview) invoicePreview.classList.remove('hidden');
    if (invoiceActions) invoiceActions.classList.remove('hidden');
    if (generateInvoiceBtn) generateInvoiceBtn.disabled = true;
    if (invoicePreview) invoicePreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Populates the invoice preview section with the given invoice data.
 * @param {object} data - The invoice data object.
 */
function populateInvoicePreview(data) {
    if (previewCompanyMainTitle) previewCompanyMainTitle.textContent = data.company.name;
    if (previewCompanySlogan) {
        previewCompanySlogan.textContent = data.company.slogan || '';
    }
    if (previewCompanyAddress) previewCompanyAddress.innerHTML = data.company.address.replace(/\n/g, '<br>');
    if (previewCompanyPhone) previewCompanyPhone.textContent = data.company.phone;
    if (previewCompanyGSTIN) previewCompanyGSTIN.textContent = data.company.gstin;
    if (previewCompanyPAN) previewCompanyPAN.textContent = data.company.pan;
    if (previewCompanyNameBottom) previewCompanyNameBottom.textContent = data.company.name;

    if (previewInvoiceNumber) previewInvoiceNumber.textContent = data.invoiceDetails.invoiceNumber;
    if (previewInvoiceDate) previewInvoiceDate.textContent = data.invoiceDetails.invoiceDate;
    if (previewTransportMode) previewTransportMode.textContent = data.invoiceDetails.transportMode || 'N/A';
    if (previewVehicleNumber) previewVehicleNumber.textContent = data.invoiceDetails.vehicleNumber || 'N/A';
    if (previewDateOfSupply) previewDateOfSupply.textContent = data.invoiceDetails.dateOfSupply;
    if (previewPlaceOfSupply) previewPlaceOfSupply.textContent = data.invoiceDetails.placeOfSupply;

    const selectedCity = indianCities.find(city => city.city.toLowerCase() === data.invoiceDetails.placeOfSupply.toLowerCase());
    if (previewPlaceOfSupplyStateOnly) previewPlaceOfSupplyStateOnly.textContent = selectedCity ? selectedCity.state : 'N/A'; // Corrected ID

    if (previewCustomerName) previewCustomerName.textContent = data.receiverDetails.name;
    if (previewCustomerAddress) previewCustomerAddress.innerHTML = data.receiverDetails.address.replace(/\n/g, '<br>') || 'N/A';
    if (previewCustomerPAN) previewCustomerPAN.textContent = data.receiverDetails.pan || 'N/A';
    if (previewCustomerGSTIN) previewCustomerGSTIN.textContent = data.receiverDetails.gstin || 'N/A';

    if (previewItemList) previewItemList.innerHTML = '';
    let previewSNo = 0;
    data.items.forEach(item => {
        previewSNo++;
        const row = document.createElement('tr');
        // Adjusted item row for preview to match sample bill
        row.innerHTML = `
            <td class="py-1 px-1 border border-black text-center">${previewSNo}</td>
            <td class="py-1 px-1 border border-black">${item.description}</td>
            <td class="py-1 px-1 border border-black text-center">${item.hsn || 'N/A'}</td>
            <td class="py-1 px-1 border border-black text-center">${item.qty}</td>
            <td class="py-1 px-1 border border-black text-right">${formatCurrency(item.amount)}</td>
        `;
        if (previewItemList) previewItemList.appendChild(row);
    });

    if (previewSubTotal) previewSubTotal.textContent = formatCurrency(data.summary.subTotal);
    if (previewTotalItemDiscount) previewTotalItemDiscount.textContent = formatCurrency(data.summary.totalItemDiscount);
    if (previewOverallDiscount) previewOverallDiscount.textContent = formatCurrency(data.summary.overallDiscount);
    if (previewTotalTaxableValue) previewTotalTaxableValue.textContent = formatCurrency(data.summary.taxableValue); // Use the stored taxable value
    if (previewCgstAmount) previewCgstAmount.textContent = formatCurrency(data.summary.cgstAmount);
    if (previewSgstAmount) previewSgstAmount.textContent = formatCurrency(data.summary.sgstAmount);
    if (previewIgstAmount) previewIgstAmount.textContent = formatCurrency(data.summary.igstAmount);
    if (previewGrandTotal) previewGrandTotal.textContent = formatCurrency(data.summary.grandTotal);

    if (amountInWordsSpan) amountInWordsSpan.textContent = convertNumberToWords(data.summary.grandTotal);

    if (previewBankName) previewBankName.textContent = data.bank.bankName;
    if (previewBankAccountNumber) previewBankAccountNumber.textContent = data.bank.accountNumber;
    if (previewBankIfscCode) previewBankIfscCode.textContent = data.bank.ifscCode;
}

// --- Invoice Actions ---

if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener('click', () => {
        const printWindow = window.open('', '_blank');

        if (!printWindow) {
            showMessageBox('Error', 'Popup blocked! Please allow popups for this site.');
            return;
        }

        const invoiceContent = invoicePreview.innerHTML;
        const styleTags = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
            .map(el => el.outerHTML)
            .join('\n');

        printWindow.document.open();
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Invoice</title>
                ${styleTags}
                <style>
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                        max-width: 210mm;
                    }
                </style>
            </head>
            <body onload="window.print(); window.close();">
                <div>${invoiceContent}</div>
            </body>
            </html>
        `);
        printWindow.document.close();
    });
}

if (downloadInvoicePdfBtn) {
    downloadInvoicePdfBtn.addEventListener('click', async () => {
        if (!invoiceData) {
            showMessageBox('Error', 'No invoice generated to download.');
            return;
        }

        // Temporarily hide actions and show preview for screenshot
        if (invoiceActions) invoiceActions.classList.add('hidden');
        if (invoicePreview) invoicePreview.classList.remove('hidden');

        const previewClone = invoicePreview.cloneNode(true);
        previewClone.classList.remove('hidden');
        // Apply print-specific styles to the clone for accurate rendering
        previewClone.style.maxWidth = '210mm'; // A4 width
        previewClone.style.minHeight = '297mm'; // A4 height
        previewClone.style.border = 'none';
        previewClone.style.boxShadow = 'none';
        previewClone.style.position = 'absolute';
        previewClone.style.left = '-9999px'; // Move off-screen
        previewClone.style.top = '-9999px';
        previewClone.style.padding = '0';
        previewClone.style.margin = '0';

        // Ensure watermark is visible on the cloned element for PDF
        const clonedWatermark = previewClone.querySelector('#watermark-text');
        if (clonedWatermark) {
            clonedWatermark.style.display = 'block';
            clonedWatermark.style.opacity = '0.1'; // Make watermark visible for PDF
        }

        // Hide print-hidden elements in the clone
        previewClone.querySelectorAll('.print-hidden').forEach(el => {
            el.style.display = 'none';
        });

        document.body.appendChild(previewClone);

        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margin = 5; // Reduced margin for more content space

        try {
            const canvas = await html2canvas(previewClone, {
                scale: 2, // Higher scale for better resolution
                useCORS: true,
                allowTaint: true,
                scrollY: -window.scrollY,
                windowWidth: previewClone.scrollWidth,
                windowHeight: previewClone.scrollHeight,
                // Ignore elements that shouldn't be in the print/PDF output
                ignoreElements: (element) => {
                    return element.classList.contains('do-not-print');
                }
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG for smaller file size
            const imgProps = pdf.getImageProperties(imgData);
            // Calculate image dimensions to fit within PDF page with margins
            const imgWidth = pdfWidth - 2 * margin;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            let heightLeft = imgHeight;
            let position = margin;

            // Add image to PDF, handling multiple pages if content is too long
            pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight - 2 * margin;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight + margin;
                pdf.addPage();
                pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight - 2 * margin;
            }

            pdf.save(`Invoice_${invoiceData.invoiceDetails.invoiceNumber}.pdf`);
            showMessageBox('Success', 'Invoice downloaded as PDF!');

        } catch (error) {
            console.error('Error generating PDF:', error);
            showMessageBox('Error', 'Failed to generate PDF. Please try again. Check console for details.');
        } finally {
            // Restore visibility and remove clone
            if (invoiceActions) invoiceActions.classList.remove('hidden');
            document.body.removeChild(previewClone);
        }
    });
}


if (saveInvoiceBtn) {
    saveInvoiceBtn.addEventListener('click', () => {
        if (!invoiceData) {
            showMessageBox('Error', 'No invoice generated to save.');
            return;
        }

        // Ensure all calculations are fresh before saving
        calculateSummary();
        invoiceData.summary.subTotal = parseFloat(subTotalSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.totalItemDiscount = parseFloat(totalItemDiscountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.overallDiscount = parseFloat(overallDiscountInput?.value) || 0;
        invoiceData.summary.taxableValue = parseFloat(totalTaxableValueSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.cgstAmount = parseFloat(cgstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.sgstAmount = parseFloat(sgstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.igstAmount = parseFloat(igstAmountSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        invoiceData.summary.grandTotal = parseFloat(grandTotalSpan?.textContent.replace(/[^0-9.-]+/g, '')) || 0;


        const existingIndex = savedInvoices.findIndex(inv => inv.invoiceDetails.invoiceNumber === invoiceData.invoiceDetails.invoiceNumber);

        // Calculate balance due based on *existing* payments for this invoice
        const totalPaidForInvoice = payments.filter(p => p.invoiceNumber === invoiceData.invoiceDetails.invoiceNumber).reduce((sum, p) => sum + p.amount, 0);
        invoiceData.summary.balanceDue = Math.max(0, invoiceData.summary.grandTotal - totalPaidForInvoice);


        if (existingIndex > -1) {
            // Update existing invoice, but keep the original 'lastSaved' if it's already there and more recent, or update to now.
            // This prevents dummy data from constantly updating if it's older.
            const existingLastSaved = new Date(savedInvoices[existingIndex].lastSaved);
            const currentSaveTime = new Date();
            savedInvoices[existingIndex] = {
                ...invoiceData,
                lastSaved: (existingLastSaved > currentSaveTime ? existingLastSaved.toISOString() : currentSaveTime.toISOString())
            };
            showMessageBox('Info', `Invoice ${invoiceData.invoiceDetails.invoiceNumber} updated successfully!`);
        } else {
            savedInvoices.push({ ...invoiceData, lastSaved: new Date().toISOString() });
            showMessageBox('Success', `Invoice ${invoiceData.invoiceDetails.invoiceNumber} saved successfully!`);
        }
        localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));

        // Re-render history if currently active to show updated status/saved invoice
        if (historySection && historySection.classList.contains('active')) {
            renderInvoiceHistory();
        }
    });
}


if (shareInvoiceBtn) {
    shareInvoiceBtn.addEventListener('click', () => {
        // This is a placeholder for actual sharing functionality.
        // In a real application, this would involve backend integration
        // to generate a shareable link or email the invoice.
        showMessageBox('Share Invoice', 'Sharing functionality is not yet implemented. In a real application, this would allow you to share the invoice via email or a secure link.');
    });
}



// --- Record Payment Button Listener ---
if (recordPaymentBtn) {
    recordPaymentBtn.addEventListener('click', () => {
        const invoiceNumber = recordPaymentBtn.dataset.invoiceNumber; // from dataset
        const paymentDate = paymentDateInput.value.trim();
        const amount = parseFloat(paymentAmountInput.value);
        const method = paymentMethodSelect.value;
        const notes = paymentNotesTextarea.value.trim();
        const customerName = paymentCustomerInput.value.trim();

        // Validation
        if (!paymentDate || isNaN(amount) || amount <= 0) {
            showMessageBox('Validation Error', 'Please enter a valid Payment Date and a positive Amount.');
            return;
        }

        const targetInvoice = savedInvoices.find(inv => inv.invoiceDetails.invoiceNumber === invoiceNumber);
        const totalPaidForInvoice = payments
            .filter(p => p.invoiceNumber === invoiceNumber)
            .reduce((sum, p) => sum + p.amount, 0);

        const currentBalanceDue = targetInvoice
            ? targetInvoice.summary.grandTotal - totalPaidForInvoice
            : Infinity;

        if (amount > currentBalanceDue + 0.01) {
            showMessageBox(
                'Payment Error',
                `Payment amount (${formatCurrency(amount)}) exceeds remaining balance (${formatCurrency(currentBalanceDue)}) for this invoice. Please enter a lower amount.`
            );
            return;
        }

        const newPayment = {
            id: Date.now() + Math.random(),
            invoiceNumber,
            customerName,
            paymentDate,
            amount: parseFloat(amount.toFixed(2)),
            method,
            notes,
        };

        payments.push(newPayment);
        localStorage.setItem('payments', JSON.stringify(payments));

        // Update invoice balance
        if (targetInvoice) {
            targetInvoice.summary.balanceDue = Math.max(
                0,
                targetInvoice.summary.grandTotal - (totalPaidForInvoice + newPayment.amount)
            );
            localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));
        }

        // Clear form
        if (paymentInvoiceDisplay) paymentInvoiceDisplay.value = '';
        if (recordPaymentBtn) recordPaymentBtn.removeAttribute('data-invoice-number');
        if (paymentAmountInput) paymentAmountInput.value = '';
        if (paymentMethodSelect) paymentMethodSelect.value = 'Cash';
        if (paymentNotesTextarea) paymentNotesTextarea.value = '';
        if (paymentCustomerInput) paymentCustomerInput.value = '';

        showMessageBox('Success', `Payment of ${formatCurrency(amount)} recorded for Invoice ${invoiceNumber}.`);

        renderPaymentHistory();
        renderInvoiceHistory?.(); // Optional chaining in case function is defined later
    });
}

// --- Renders Payment History ---
function renderPaymentHistory() {
    if (!paymentHistoryList) return;

    paymentHistoryList.innerHTML = '';

    if (payments.length === 0) {
        if (noPaymentData) noPaymentData.classList.remove('hidden');
        return;
    }

    if (noPaymentData) noPaymentData.classList.add('hidden');

    const sortedPayments = [...payments].sort((a, b) => {
        const [dA, mA, yA] = a.paymentDate.split('/').map(Number);
        const [dB, mB, yB] = b.paymentDate.split('/').map(Number);
        const dateA = new Date(yA, mA - 1, dA);
        const dateB = new Date(yB, mB - 1, dB);
        return dateB - dateA;
    });

    sortedPayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm">${payment.invoiceNumber || 'N/A'}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-left text-sm">${payment.customerName}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm">${payment.paymentDate}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-right text-sm">${formatCurrency(payment.amount)}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm">${payment.method}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-left truncate max-w-xs text-sm">${payment.notes || 'N/A'}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-center">
                <button data-id="${payment.id}" class="delete-payment-btn btn-danger text-sm p-1 rounded">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        paymentHistoryList.appendChild(row);
    });

    // Delete Button Handler
    document.querySelectorAll('.delete-payment-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const paymentId = parseFloat(e.currentTarget.dataset.id);
            showMessageBox('Confirm Deletion', 'Are you sure you want to delete this payment record?', () => {
                deletePayment(paymentId);
            });
        });
    });
}
/**
 * Deletes a payment record by ID and updates associated invoice balance.
 * @param {number} paymentId - The ID of the payment to delete.
 */
function deletePayment(paymentId) {
    const paymentToDelete = payments.find(p => p.id === paymentId);
    if (!paymentToDelete) return;

    payments = payments.filter(p => p.id !== paymentId);
    localStorage.setItem('payments', JSON.stringify(payments));

    const invoiceNumber = paymentToDelete.invoiceNumber;
    const invoiceIndex = savedInvoices.findIndex(inv => inv.invoiceDetails.invoiceNumber === invoiceNumber);

    if (invoiceIndex !== -1) {
        const invoice = savedInvoices[invoiceIndex];
        const totalPaidForInvoice = payments
            .filter(p => p.invoiceNumber === invoiceNumber)
            .reduce((sum, p) => sum + p.amount, 0);

        invoice.summary.balanceDue = Math.max(0, invoice.summary.grandTotal - totalPaidForInvoice);
        localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));
    }
    renderPaymentHistory();
    renderInvoiceHistory(); // Re-render history to update balance due display
}


// --- Invoice History Section ---

if (historyFilterBtn) historyFilterBtn.addEventListener('click', renderInvoiceHistory);
if (historyResetBtn) {
    historyResetBtn.addEventListener('click', () => {
        if (historyInvoiceNumberSearch) historyInvoiceNumberSearch.value = '';
        if (historyCustomerNameSearch) historyCustomerNameSearch.value = '';
        if (historyDateFrom) historyDateFrom.value = '';
        if (historyDateTo) historyDateTo.value = '';
        renderInvoiceHistory();
    });
}


/**
 * Renders the invoice history table, applying filters if specified.
 */
function renderInvoiceHistory() {
    if (!invoiceHistoryList) return; // Add null check for invoiceHistoryList
    invoiceHistoryList.innerHTML = '';
    let filteredInvoices = [...savedInvoices];

    const invoiceNoQuery = historyInvoiceNumberSearch?.value.trim().toLowerCase();
    const customerNameQuery = historyCustomerNameSearch?.value.trim().toLowerCase();
    const dateFromStr = historyDateFrom?.value.trim();
    const dateToStr = historyDateTo?.value.trim();

    if (invoiceNoQuery) {
        filteredInvoices = filteredInvoices.filter(inv =>
            inv.invoiceDetails.invoiceNumber.toLowerCase().includes(invoiceNoQuery)
        );
    }
    if (customerNameQuery) {
        filteredInvoices = filteredInvoices.filter(inv =>
            inv.receiverDetails.name.toLowerCase().includes(customerNameQuery)
        );
    }
    if (dateFromStr) {
        const [d, m, y] = dateFromStr.split('/').map(Number);
        const fromDate = new Date(y, m - 1, d);
        filteredInvoices = filteredInvoices.filter(inv => {
            const [id, im, iy] = inv.invoiceDetails.invoiceDate.split('/').map(Number);
            const invoiceDate = new Date(iy, im - 1, id);
            return invoiceDate >= fromDate;
        });
    }
    if (dateToStr) {
        const [d, m, y] = dateToStr.split('/').map(Number);
        let toDate = new Date(y, m - 1, d);
        toDate.setHours(23, 59, 59, 999);
        filteredInvoices = filteredInvoices.filter(inv => {
            const [id, im, iy] = inv.invoiceDetails.invoiceDate.split('/').map(Number);
            const invoiceDate = new Date(iy, im - 1, id);
            return invoiceDate <= toDate;
        });
    }

    if (filteredInvoices.length === 0) {
        if (noHistoryData) noHistoryData.classList.remove('hidden');
        return;
    }
    if (noHistoryData) noHistoryData.classList.add('hidden');

    filteredInvoices.sort((a, b) => {
        const [dA, mA, yA] = a.invoiceDetails.invoiceDate.split('/').map(Number);
        const [dB, mB, yB] = b.invoiceDetails.invoiceDate.split('/').map(Number);
        const dateA = new Date(yA, mA - 1, dA);
        const dateB = new Date(yB, mB - 1, dB);
        return dateB - dateA;
    });

    filteredInvoices.forEach(invoice => {
        const totalPaid = payments
            .filter(p => p.invoiceNumber === invoice.invoiceDetails.invoiceNumber)
            .reduce((sum, p) => sum + p.amount, 0);
        const balanceDue = Math.max(0, invoice.summary.grandTotal - totalPaid);

        let statusClass = '';
        let statusText = '';
        if (balanceDue <= 0.01) { // Add a small tolerance for floating point
            statusClass = 'text-green-600 font-semibold';
            statusText = 'Paid';
        } else if (totalPaid > 0) {
            statusClass = 'text-orange-600 font-semibold';
            statusText = 'Partial';
        } else {
            statusClass = 'text-red-600 font-semibold';
            statusText = 'Unpaid';
        }


        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm">
                <a href="#" class="view-invoice-link text-blue-600 hover:underline" data-invoice-no="${invoice.invoiceDetails.invoiceNumber}">
                    ${invoice.invoiceDetails.invoiceNumber}
                </a>
            </td>
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm">${invoice.invoiceDetails.invoiceDate}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-left text-sm">${invoice.receiverDetails.name}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-right text-sm">${formatCurrency(invoice.summary.grandTotal)}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-right text-sm">${formatCurrency(balanceDue)}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-center text-sm ${statusClass}">${statusText}</td>
            <td class="py-2 px-2 border-b border-gray-200 text-center space-x-2">
                <button data-invoice-no="${invoice.invoiceDetails.invoiceNumber}" class="load-invoice-btn bg-blue-500 text-white text-sm p-1 rounded hover:bg-blue-600">
                    <i class="fas fa-edit"></i> Edit/View
                </button>
                <button data-invoice-no="${invoice.invoiceDetails.invoiceNumber}" data-customer-name="${invoice.receiverDetails.name}" data-grand-total="${invoice.summary.grandTotal}" data-balance-due="${balanceDue}" class="record-payment-from-history-btn bg-green-500 text-white text-sm p-1 rounded hover:bg-green-600 ${balanceDue <= 0.01 ? 'opacity-50 cursor-not-allowed' : ''}" ${balanceDue <= 0.01 ? 'disabled' : ''}>
                    <i class="fas fa-money-bill-wave"></i> Record Payment
                </button>
                <button data-invoice-no="${invoice.invoiceDetails.invoiceNumber}" class="delete-invoice-btn btn-danger text-sm p-1 rounded hover:bg-red-600">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        `;
        invoiceHistoryList.appendChild(row);
    });

    document.querySelectorAll('.view-invoice-link, .load-invoice-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const invoiceNo = e.currentTarget.dataset.invoiceNo;
            const invoiceToLoad = savedInvoices.find(inv => inv.invoiceDetails.invoiceNumber === invoiceNo);
            if (invoiceToLoad) {
                loadInvoiceToForm(invoiceToLoad);
                setActiveNav(navInvoice); // Navigate to invoice section
                populateInvoicePreview(invoiceToLoad); // Ensure preview is also updated
                if (invoicePreview) invoicePreview.classList.remove('hidden'); // Show preview
                if (invoiceActions) invoiceActions.classList.remove('hidden'); // Show actions
                if (generateInvoiceBtn) generateInvoiceBtn.disabled = true; // Disable generate button after loading existing
                if (invoicePreview) invoicePreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                showMessageBox('Error', 'Invoice not found.');
            }
        });
    });

    document.querySelectorAll('.record-payment-from-history-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const invoiceNo = e.currentTarget.dataset.invoiceNo;
            const customerName = e.currentTarget.dataset.customerName;
            const grandTotal = parseFloat(e.currentTarget.dataset.grandTotal);
            const balanceDue = parseFloat(e.currentTarget.dataset.balanceDue);

            if (balanceDue <= 0.01) {
                showMessageBox('Info', 'This invoice is already fully paid.');
                return;
            }

            setActiveNav(navPayments);
            if (paymentInvoiceDisplay) paymentInvoiceDisplay.value = invoiceNo; // Display invoice number in payment form
            if (recordPaymentBtn) recordPaymentBtn.dataset.invoiceNumber = invoiceNo; // Set data attribute for recording
            if (paymentCustomerInput) paymentCustomerInput.value = customerName; // Auto-fill customer name
            if (paymentAmountInput) paymentAmountInput.value = balanceDue.toFixed(2); // Pre-fill with remaining balance
            if (paymentAmountInput) paymentAmountInput.focus(); // Focus on amount input
        });
    });

    document.querySelectorAll('.delete-invoice-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const invoiceNo = e.currentTarget.dataset.invoiceNo;
            showMessageBox('Confirm Deletion', `Are you sure you want to delete Invoice ${invoiceNo}? This action cannot be undone and will also delete associated payments.`, () => {
                deleteInvoice(invoiceNo);
            });
        });
    });
}


/**
 * Loads a saved invoice's data into the main invoice form for editing/viewing.
 * @param {object} invoice - The invoice data object to load.
 */
function loadInvoiceToForm(invoice) {
    if (customerNameInput) customerNameInput.value = invoice.receiverDetails.name;
    if (customerAddressInput) customerAddressInput.value = invoice.receiverDetails.address;
    if (customerPANInput) customerPANInput.value = invoice.receiverDetails.pan || '';
    if (customerGSTINInput) customerGSTINInput.value = invoice.receiverDetails.gstin;
    if (invoiceNumberInput) invoiceNumberInput.value = invoice.invoiceDetails.invoiceNumber;
    if (invoiceDateInput) invoiceDateInput.value = invoice.invoiceDetails.invoiceDate;
    if (transportModeInput) transportModeInput.value = invoice.invoiceDetails.transportMode || '';
    if (vehicleNumberInput) vehicleNumberInput.value = invoice.invoiceDetails.vehicleNumber || '';
    if (dateOfSupplyInput) dateOfSupplyInput.value = invoice.invoiceDetails.dateOfSupply;
    if (placeOfSupplyCityInput) placeOfSupplyCityInput.value = invoice.invoiceDetails.placeOfSupply;
    const selectedCity = indianCities.find(city => city.city.toLowerCase() === invoice.invoiceDetails.placeOfSupply.toLowerCase());
    if (placeOfSupplyStateInput) placeOfSupplyStateInput.value = selectedCity ? selectedCity.state : ''; // Auto-fill state on load

    if (itemList) itemList.innerHTML = '';
    itemCounter = 0;
    invoice.items.forEach(item => createItemRow(item));
    if (invoice.items.length === 0) {
        createItemRow(); // Ensure at least one empty row if invoice had no items
    }

    if (overallDiscountInput) overallDiscountInput.value = invoice.summary.overallDiscount;

    updateTaxRatesBasedOnGSTIN(); // This will also call calculateSummary internally
    invoiceData = invoice;
}

/**
 * Deletes an invoice and its associated payments.
 * @param {string} invoiceNumber - The invoice number to delete.
 */
function deleteInvoice(invoiceNumber) {
    savedInvoices = savedInvoices.filter(inv => inv.invoiceDetails.invoiceNumber !== invoiceNumber);
    localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));

    payments = payments.filter(p => p.invoiceNumber !== invoiceNumber);
    localStorage.setItem('payments', JSON.stringify(payments));

    showMessageBox('Success', `Invoice ${invoiceNumber} and its associated payments have been deleted.`, () => {
        renderInvoiceHistory();
        renderPaymentHistory();
    });
}


// --- Reports Section ---

if (generateReportBtn) {
    generateReportBtn.addEventListener('click', () => {
        const fromDateStr = reportDateFrom?.value.trim();
        const toDateStr = reportDateTo?.value.trim();

        if (!fromDateStr || !toDateStr) {
            showMessageBox('Validation Error', 'Please select both "Date From" and "Date To" for the report.');
            return;
        }

        const [dFrom, mFrom, yFrom] = fromDateStr.split('/').map(Number);
        const fromDate = new Date(yFrom, mFrom - 1, dFrom);

        const [dTo, mTo, yTo] = toDateStr.split('/').map(Number);
        let toDate = new Date(yTo, mTo - 1, dTo);
        toDate.setHours(23, 59, 59, 999);

        let totalSales = 0;
        let totalDiscount = 0;
        let totalTaxableAmount = 0;
        let totalSgstCollected = 0;
        let totalCgstCollected = 0;
        let totalIgstCollected = 0;

        const relevantInvoices = savedInvoices.filter(invoice => {
            const [id, im, iy] = invoice.invoiceDetails.invoiceDate.split('/').map(Number);
            const invoiceDate = new Date(iy, im - 1, id);
            return invoiceDate >= fromDate && invoiceDate <= toDate;
        });

        if (relevantInvoices.length === 0) {
            showMessageBox('No Data', 'No invoices found for the selected date range to generate a report.');
            if (reportTotalSales) reportTotalSales.textContent = formatCurrency(0);
            if (reportTotalDiscount) reportTotalDiscount.textContent = formatCurrency(0);
            if (reportTaxableAmount) reportTaxableAmount.textContent = formatCurrency(0);
            if (reportSgstCollected) reportSgstCollected.textContent = formatCurrency(0);
            if (reportCgstCollected) reportCgstCollected.textContent = formatCurrency(0);
            if (reportIgstCollected) reportIgstCollected.textContent = formatCurrency(0);
            return;
        }

        relevantInvoices.forEach(invoice => {
            totalSales += invoice.summary.grandTotal;
            // Total discount is sum of item-level discounts and overall discount
            totalDiscount += (invoice.summary.totalItemDiscount || 0) + (invoice.summary.overallDiscount || 0);
            // Taxable value should be subtotal before tax, after all discounts
            const currentInvoiceTaxableValue = (invoice.summary.subTotal || 0) - (invoice.summary.totalItemDiscount || 0) - (invoice.summary.overallDiscount || 0);
            totalTaxableAmount += Math.max(0, currentInvoiceTaxableValue);

            totalSgstCollected += invoice.summary.sgstAmount || 0;
            totalCgstCollected += invoice.summary.cgstAmount || 0;
            totalIgstCollected += invoice.summary.igstAmount || 0;
        });
        if (reportTotalSales) reportTotalSales.textContent = formatCurrency(totalSales);
        if (reportTotalDiscount) reportTotalDiscount.textContent = formatCurrency(totalDiscount);
        if (reportTaxableAmount) reportTaxableAmount.textContent = formatCurrency(totalTaxableAmount);
        if (reportSgstCollected) reportSgstCollected.textContent = formatCurrency(totalSgstCollected);
        if (reportCgstCollected) reportCgstCollected.textContent = formatCurrency(totalCgstCollected);
        if (reportIgstCollected) reportIgstCollected.textContent = formatCurrency(totalIgstCollected);

        showMessageBox('Report Generated', `Report for ${fromDateStr} to ${toDateStr} successfully generated.`);
    });
}


if (exportReportBtn) {
    exportReportBtn.addEventListener('click', () => {
        const fromDateStr = reportDateFrom?.value.trim();
        const toDateStr = reportDateTo?.value.trim();

        if (!fromDateStr || !toDateStr) {
            showMessageBox('Validation Error', 'Please select both "Date From" and "Date To" to export the report.');
            return;
        }

        const [dFrom, mFrom, yFrom] = fromDateStr.split('/').map(Number);
        const fromDate = new Date(yFrom, mFrom - 1, dFrom);

        const [dTo, mTo, yTo] = toDateStr.split('/').map(Number);
        let toDate = new Date(yTo, mTo - 1, dTo);
        toDate.setHours(23, 59, 59, 999);

        const relevantInvoices = savedInvoices.filter(invoice => {
            const [id, im, iy] = invoice.invoiceDetails.invoiceDate.split('/').map(Number);
            const invoiceDate = new Date(iy, im - 1, id);
            return invoiceDate >= fromDate && invoiceDate <= toDate;
        });

        if (relevantInvoices.length === 0) {
            showMessageBox('No Data', 'No invoices found for the selected date range to export.');
            return;
        }

        let csvContent = "Invoice Number,Invoice Date,Customer Name,Customer GSTIN,Amount,CGST,SGST,IGST,Total Tax,Overall Discount,Grand Total\n";

        relevantInvoices.forEach(invoice => {
            // Ensure values are numbers before toFixed
            const subTotal = invoice.summary.subTotal || 0;
            const totalItemDiscount = invoice.summary.totalItemDiscount || 0;
            const overallDiscount = invoice.summary.overallDiscount || 0;
            const cgstAmount = invoice.summary.cgstAmount || 0;
            const sgstAmount = invoice.summary.sgstAmount || 0;
            const igstAmount = invoice.summary.igstAmount || 0;
            const grandTotal = invoice.summary.grandTotal || 0;

            const taxableAmountCalc = subTotal - totalItemDiscount - overallDiscount;
            const totalTax = cgstAmount + sgstAmount + igstAmount;

            csvContent += [
                invoice.invoiceDetails.invoiceNumber,
                invoice.invoiceDetails.invoiceDate,
                `"${invoice.receiverDetails.name.replace(/"/g, '""')}"`,
                invoice.receiverDetails.gstin || 'N/A',
                taxableAmountCalc.toFixed(2),
                cgstAmount.toFixed(2),
                sgstAmount.toFixed(2),
                igstAmount.toFixed(2),
                totalTax.toFixed(2),
                overallDiscount.toFixed(2),
                grandTotal.toFixed(2),
            ].join(',') + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `Invoice_Report_${fromDateStr.replace(/\//g, '-')}_to_${toDateStr.replace(/\//g, '-')}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showMessageBox('Success', 'Report exported as CSV file!');
    });
}


// --- Settings Section ---

if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
        const companyName = settingCompanyName?.value.trim();
        const companyAddress = settingCompanyAddress?.value.trim();
        const companyGSTIN = settingCompanyGSTIN?.value.trim().toUpperCase();
        const companyPAN = settingCompanyPAN?.value.trim().toUpperCase();
        const companyPhone = settingCompanyPhone?.value.trim();

        const bankName = settingBankName?.value.trim();
        const accountNumber = settingAccountNumber?.value.trim();
        const ifscCode = settingIfscCode?.value.trim().toUpperCase();

        const cgstRate = parseFloat(settingCgstRate?.value);
        const sgstRate = parseFloat(settingSgstRate?.value);
        const igstRate = parseFloat(settingIgstRate?.value);

        if (!companyName || !companyAddress || !companyGSTIN || !companyPAN) {
            showMessageBox('Validation Error', 'Company Name, Address, GSTIN, and PAN are required fields.');
            return;
        }
        if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(companyGSTIN)) {
            showMessageBox('Validation Error', 'Invalid Company GSTIN format. It should be 15 alphanumeric characters.');
            return;
        }
        if (companyPAN && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(companyPAN)) { // PAN validation added
            showMessageBox('Validation Error', 'Invalid Company PAN format. It should be 10 alphanumeric characters (e.g., ABCDE1234F).');
            return;
        }
        if (isNaN(cgstRate) || isNaN(sgstRate) || isNaN(igstRate) || cgstRate < 0 || sgstRate < 0 || igstRate < 0) {
            showMessageBox('Validation Error', 'Tax rates must be valid positive numbers.');
            return;
        }


        COMPANY_DETAILS = {
            name: companyName,
            address: companyAddress,
            gstin: companyGSTIN,
            pan: companyPAN,
            phone: companyPhone,
            slogan: COMPANY_DETAILS.slogan // Retain existing slogan
        };
        BANK_DETAILS = {
            bankName: bankName,
            accountNumber: accountNumber,
            ifscCode: ifscCode
        };
        TAX_RATES = {
            cgst: cgstRate,
            sgst: sgstRate,
            igst: igstRate
        };

        localStorage.setItem('companyDetails', JSON.stringify(COMPANY_DETAILS));
        localStorage.setItem('bankDetails', JSON.stringify(BANK_DETAILS));
        localStorage.setItem('taxRates', JSON.stringify(TAX_RATES));

        updateCompanyDisplay();
        updateTaxRatesBasedOnGSTIN(); // This will trigger calculateSummary as well
        showMessageBox('Settings Saved', 'Your company and tax settings have been updated successfully!');
    });
}


/**
 * Loads saved settings into the settings form fields.
 */
function loadSettings() {
    if (settingCompanyName) settingCompanyName.value = COMPANY_DETAILS.name;
    if (settingCompanyAddress) settingCompanyAddress.value = COMPANY_DETAILS.address;
    if (settingCompanyGSTIN) settingCompanyGSTIN.value = COMPANY_DETAILS.gstin;
    if (settingCompanyPAN) settingCompanyPAN.value = COMPANY_DETAILS.pan;
    if (settingCompanyPhone) settingCompanyPhone.value = COMPANY_DETAILS.phone;


    if (settingBankName) settingBankName.value = BANK_DETAILS.bankName;
    if (settingAccountNumber) settingAccountNumber.value = BANK_DETAILS.accountNumber;
    if (settingIfscCode) settingIfscCode.value = BANK_DETAILS.ifscCode;

    if (settingCgstRate) settingCgstRate.value = TAX_RATES.cgst;
    if (settingSgstRate) settingSgstRate.value = TAX_RATES.sgst;
    if (settingIgstRate) settingIgstRate.value = TAX_RATES.igst;
}

/**
 * Updates the displayed company details across the application UI.
 */
function updateCompanyDisplay() {
    if (displayCompanyName) displayCompanyName.textContent = COMPANY_DETAILS.name;
    if (displayCompanyAddress) displayCompanyAddress.innerHTML = COMPANY_DETAILS.address.replace(/\n/g, '<br>');
    if (displayCompanyGSTIN) displayCompanyGSTIN.textContent = COMPANY_DETAILS.gstin;
    if (displayCompanyPAN) displayCompanyPAN.textContent = COMPANY_DETAILS.pan;
    if (displayCompanyPhone) displayCompanyPhone.textContent = COMPANY_DETAILS.phone;


    if (sidebarCompanyName) sidebarCompanyName.textContent = COMPANY_DETAILS.name;

    if (previewCompanySlogan) {
        previewCompanySlogan.textContent = COMPANY_DETAILS.slogan || '';
    }
    if (watermarkElement) {
        watermarkElement.textContent = COMPANY_DETAILS.name;
    }
}

// --- Dummy Data Generation for History & Reports ---

/**
 * Generates dummy invoice and payment data for demonstration purposes if local storage is empty.
 * @param {number} count - The number of dummy invoices to generate.
 */
function generateDummyInvoices(count) {
    if (JSON.parse(localStorage.getItem('savedInvoices') || '[]').length > 0) {
        console.log("Dummy data already exists. Skipping generation.");
        return;
    }

    console.log("Generating dummy data...");

    const dummyCustomers = [
        { name: "Global Traders", address: "123 Market St,\nNew Delhi, Delhi", pan: "ABCDE1234F", gstin: "07AAAFG8901R7Z8" },
        { name: "Local Retailers Co.", address: "45 Main Rd,\nBengaluru, Karnataka", pan: "FGHIJ5678K", gstin: "29FGHIJ5678K2Z2" },
        { name: "City Wholesalers", address: "Unit 7, Ind. Area,\nAhmedabad, Gujarat", pan: "LMNOP9012Q", gstin: "24LMNOP9012Q3Z3" },
        { name: "Tech Solutions Inc.", address: "Tech Park,\nHyderabad, Telangana", pan: "QRSTU3456V", gstin: "36QRSTU3456V4Z4" },
        { name: "Sharma Electronics", address: "G-10, Plaza,\nLucknow, Uttar Pradesh", pan: "WXYZ2345A", gstin: "09WXYZ2345A5Z5" },
        { name: "Priya Boutique", address: "Commercial Street,\nJaipur, Rajasthan", pan: "BCDEF6789B", gstin: "08BCDEF6789B6Z6" },
        { name: "Fast Food Supplies", address: "Food Zone,\nMumbai, Maharashtra", pan: "GHIJK0123C", gstin: "27GHIJK0123C7Z7" },
        { name: "Agri Products Ltd.", address: "Rural Rd,\nPatna, Bihar", pan: "LMNOP4567D", gstin: "10LMNOP4567D8Z8" },
        { name: "Builders Mart", address: "Construction Site,\nChennai, Tamil Nadu", pan: "QRSTU8901E", gstin: "33QRSTU8901E9Z9" },
        { name: "Handicrafts India", address: "Artisan Village,\nKolkata, West Bengal", pan: "WXYZ1234F", gstin: "19WXYZ1234F0Z0" },
        { name: "Green Growers", address: "Farm Rd,\nBhopal, Madhya Pradesh", pan: "ABCDE5678G", gstin: "23ABCDE5678G1Z1" },
        { name: "Aqua Pure Water", address: "Water Treatment,\nPune, Maharashtra", pan: "FGHIJ9012H", gstin: "27FGHIJ9012H2Z2" },
        { name: "Bright Lights Co.", address: "Elect. Mkt.,\nVisakhapatnam, AP", pan: "LMNOP3456I", gstin: "37LMNOP3456I3Z3" },
        { name: "Creative Minds Agency", address: "Design Studio,\nSurat, Gujarat", pan: "QRSTU7890J", gstin: "24QRSTU7890J4Z4" },
        { name: "Modern Furnishings", address: "Furniture St.,\nChandigarh, Chandigarh", pan: "WXYZ1234K", gstin: "04WXYZ1234K5Z5" },
        { name: "Heritage Sarees", address: "Old City,\nVaranasi, Uttar Pradesh", pan: "BCDEF5678L", gstin: "09BCDEF5678L6Z6" },
        { name: "Sporting Goods Hub", address: "Stadium Rd,\nKochi, Kerala", pan: "GHIJK9012M", gstin: "32GHIJK9012M7Z7" },
        { name: "Pet Paradise Store", address: "Animal Ave,\nNagpur, Maharashtra", pan: "LMNOP3456N", gstin: "27LMNOP3456N8Z8" },
        { name: "Bookworm Library", address: "University Area,\nDelhi, Delhi", pan: "QRSTU7890O", gstin: "07QRSTU7890O9Z9" },
        { name: "Gizmo Gadgets", address: "IT Hub,\nBengaluru, Karnataka", pan: "WXYZ1234P", gstin: "29WXYZ1234P0Z0" },
        { name: "B2C Customer 1", address: "101 Res. Area,\nNagpur, Maharashtra", pan: "", gstin: "" },
        { name: "B2C Customer 2", address: "Small Town, Uttar Pradesh", pan: "", gstin: "" },
        { name: "B2C Customer 3", address: "Village, Bihar", pan: "", gstin: "" }
    ];

    const dummyItems = [
        { description: "Ceramic Beads - Blue (10mm)", hsn: "7116", qty: 10, rate: 50.00, discount: "5%" },
        { description: "Glass Beads - Red (8mm Faceted)", hsn: "7116", qty: 20, rate: 25.00, discount: "100" },
        { description: "Wooden Beads - Assorted (Natural)", hsn: "4420", qty: 5, rate: 120.00, discount: "" },
        { description: "Metal Charms - Silver Plated (Star)", hsn: "7117", qty: 30, rate: 15.00, discount: "" },
        { description: "Seed Beads - Green (Size 11/0)", hsn: "7116", qty: 100, rate: 5.00, discount: "50" },
        { description: "Pearl Beads - White (Synthetic Round)", hsn: "7101", qty: 8, rate: 200.00, discount: "8%" },
        { description: "Gemstone Beads - Amethyst (Irregular Cut)", hsn: "7103", qty: 3, rate: 500.00, discount: "" },
        { description: "Jewelry Wire - Copper (20 Gauge)", hsn: "7407", qty: 10, rate: 80.00, discount: "" },
        { description: "Beading Needles (Pack of 5)", hsn: "7319", qty: 2, rate: 75.00, discount: "" },
        { description: "Elastic Thread (Clear, 10m)", hsn: "5604", qty: 15, rate: 30.00, discount: "2%" },
        { description: "Crimp Beads (Gold Tone, 2mm)", hsn: "7117", qty: 200, rate: 1.00, discount: "" },
        { description: "Jump Rings (Mixed Sizes)", hsn: "7117", qty: 1, rate: 150.00, discount: "" }
    ];

    const numDummyInvoices = count;

    for (let i = 0; i < numDummyInvoices; i++) {
        const customer = dummyCustomers[Math.floor(Math.random() * dummyCustomers.length)];
        // Determine placeOfSupply based on customer's GSTIN or a random city if no GSTIN
        let placeOfSupplyForInvoice = "Mumbai"; // Default
        const companyStateCode = getGstinStateCode(COMPANY_DETAILS.gstin);
        if (customer.gstin) {
            const customerStateName = getStateFromGSTIN(customer.gstin);
            const cityInState = indianCities.find(city => city.state === customerStateName);
            if (cityInState) {
                placeOfSupplyForInvoice = cityInState.city;
            } else {
                // If GSTIN state found but no city in our list, pick a random city from that state if available
                const otherCitiesInState = indianCities.filter(city => city.state === customerStateName);
                if (otherCitiesInState.length > 0) {
                    placeOfSupplyForInvoice = otherCitiesInState[Math.floor(Math.random() * otherCitiesInState.length)].city;
                } else {
                    // Fallback to a random city if no matching city in DB for the GSTIN state
                    placeOfSupplyForInvoice = indianCities[Math.floor(Math.random() * indianCities.length)].city;
                }
            }
        } else {
            // For B2C customers, use the company's state for intra-state logic, pick a city from that state
            const companyStateName = gstStateCodes[companyStateCode];
            const citiesInCompanyState = indianCities.filter(city => city.state === companyStateName);
            if (citiesInCompanyState.length > 0) {
                placeOfSupplyForInvoice = citiesInCompanyState[Math.floor(Math.random() * citiesInCompanyState.length)].city;
            } else {
                placeOfSupplyForInvoice = indianCities[Math.floor(Math.random() * indianCities.length)].city;
            }
        }


        const dummyInvoiceCounter = (i + 1).toString().padStart(4, '0');
        const invoiceNum = `DUMMY-INV-${dummyInvoiceCounter}`;

        const today = new Date();
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const randomTimestamp = oneYearAgo.getTime() + Math.random() * (today.getTime() - oneYearAgo.getTime());
        const invoiceDate = new Date(randomTimestamp);
        const invDateFormatted = formatDateForDisplay(formatDateForInput(invoiceDate));

        const numItems = Math.floor(Math.random() * 3) + 2;
        let items = [];
        let currentSubTotal = 0;
        let currentTotalItemDiscount = 0;

        for (let j = 0; j < numItems; j++) {
            const itemTemplate = dummyItems[Math.floor(Math.random() * dummyItems.length)];
            const qty = Math.floor(Math.random() * 10) + 1;
            const rate = parseFloat((itemTemplate.rate * (1 + (Math.random() - 0.5) * 0.2)).toFixed(2));
            const description = itemTemplate.description;
            const hsn = itemTemplate.hsn;

            let discountInputVal = itemTemplate.discount;
            let itemEffectiveDiscount = 0;

            if (discountInputVal.endsWith('%')) {
                const percentage = parseFloat(discountInputVal.slice(0, -1));
                if (!isNaN(percentage)) {
                    itemEffectiveDiscount = (qty * rate) * (percentage / 100);
                }
            } else if (discountInputVal) {
                itemEffectiveDiscount = parseFloat(discountInputVal);
            }

            const itemAmount = (qty * rate) - itemEffectiveDiscount;

            items.push({
                description: description,
                hsn: hsn,
                qty: qty,
                rate: rate,
                discountInput: discountInputVal,
                itemDiscountAmount: parseFloat(itemEffectiveDiscount.toFixed(2)),
                amount: parseFloat(itemAmount.toFixed(2))
            });
            currentSubTotal += (qty * rate); // Subtotal before item-level discount
            currentTotalItemDiscount += itemEffectiveDiscount; // Sum of item-level discounts
        }

        const subTotalAfterItemDiscount = currentSubTotal - currentTotalItemDiscount;
        const overallDiscount = Math.random() < 0.4 ? 0 : (Math.floor(Math.random() * 5) + 1) * 5; // Overall discount in amount

        const taxableValue = Math.max(0, subTotalAfterItemDiscount - overallDiscount);

        let cgstAmount = 0;
        let sgstAmount = 0;
        let igstAmount = 0;

        const customerGstinCode = getGstinStateCode(customer.gstin);
        // COMPANY_DETAILS.gstin is global and reliable
        // const companyGstinCode = getGstinStateCode(COMPANY_DETAILS.gstin); // Already defined earlier

        if (customerGstinCode && customerGstinCode === companyStateCode) {
            cgstAmount = taxableValue * (TAX_RATES.cgst / 100);
            sgstAmount = taxableValue * (TAX_RATES.sgst / 100);
        } else if (customerGstinCode && customerGstinCode !== companyStateCode) {
            igstAmount = taxableValue * (TAX_RATES.igst / 100);
        } else {
            // Default for B2C (no GSTIN or invalid) is intra-state (company's state)
            cgstAmount = taxableValue * (TAX_RATES.cgst / 100);
            sgstAmount = taxableValue * (TAX_RATES.sgst / 100);
        }

        cgstAmount = parseFloat(cgstAmount.toFixed(2));
        sgstAmount = parseFloat(sgstAmount.toFixed(2));
        igstAmount = parseFloat(igstAmount.toFixed(2));

        let grandTotal = taxableValue + cgstAmount + sgstAmount + igstAmount;
        grandTotal = parseFloat(grandTotal.toFixed(2));

        const dummyInvoice = {
            invoiceDetails: {
                invoiceNumber: invoiceNum,
                invoiceDate: invDateFormatted,
                transportMode: ['Road', 'Rail', 'Air'][Math.floor(Math.random() * 3)],
                vehicleNumber: `UP65${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 9000) + 1000}`,
                dateOfSupply: invDateFormatted,
                placeOfSupply: placeOfSupplyForInvoice
            },
            receiverDetails: customer,
            items: items,
            summary: {
                subTotal: parseFloat(currentSubTotal.toFixed(2)), // Gross total of items before any discounts
                totalItemDiscount: parseFloat(currentTotalItemDiscount.toFixed(2)), // Sum of all item-level discounts
                overallDiscount: parseFloat(overallDiscount.toFixed(2)), // Overall discount
                taxableValue: parseFloat(taxableValue.toFixed(2)), // Calculated taxable value
                cgstRate: TAX_RATES.cgst,
                cgstAmount: cgstAmount,
                sgstRate: TAX_RATES.sgst,
                sgstAmount: sgstAmount,
                igstRate: TAX_RATES.igst,
                igstAmount: igstAmount,
                grandTotal: grandTotal,
                balanceDue: grandTotal // Initially, balance due is grand total
            },
            company: COMPANY_DETAILS,
            bank: BANK_DETAILS,
            lastSaved: new Date().toISOString()
        };
        savedInvoices.push(dummyInvoice);

        if (Math.random() < 0.7) { // 70% chance of having at least one payment
            const paidAmount = parseFloat((Math.random() * grandTotal * (0.2 + Math.random() * 0.8)).toFixed(2));
            const paymentDate = new Date(invoiceDate.getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)); // Payment within 30 days
            payments.push({
                id: Date.now() + i * 100 + Math.random(),
                invoiceNumber: invoiceNum,
                customerName: customer.name, // Store customer name with payment
                paymentDate: formatDateForDisplay(formatDateForInput(paymentDate)),
                amount: paidAmount,
                method: ['Cash', 'Bank Transfer', 'UPI'][Math.floor(Math.random() * 3)],
                notes: 'Dummy payment'
            });
        }
    }

    // After all dummy invoices and payments are created, calculate final balanceDue
    savedInvoices.forEach(invoice => {
        const totalPaidForInvoice = payments
            .filter(p => p.invoiceNumber === invoice.invoiceDetails.invoiceNumber)
            .reduce((sum, p) => sum + p.amount, 0);
        invoice.summary.balanceDue = Math.max(0, invoice.summary.grandTotal - totalPaidForInvoice);
    });

    localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));
    localStorage.setItem('payments', JSON.stringify(payments));
    localStorage.setItem('customers', JSON.stringify(dummyCustomers));
    // Save itemsData from dummy items for autocomplete
    localStorage.setItem('itemsData', JSON.stringify(Object.fromEntries(dummyItems.map(item => [`${item.description.toLowerCase()}-${item.hsn.toLowerCase()}`, {description: item.description, hsn: item.hsn, rate: item.rate}]))));

    console.log(`Generated ${numDummyInvoices} dummy invoices and payments.`);
}


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Set to true for development/testing to auto-generate dummy data if local storage is empty
    const isDevMode = true;
    if (isDevMode) {
        generateDummyInvoices(30);
    }

    checkAuth();
    // These render functions are called within checkAuth if logged in,
    // but explicitly calling them ensures data is always fresh on initial load.
    // They are safe to call multiple times as they clear and re-render.
    // renderPaymentHistory(); // Called by checkAuth -> setActiveNav
    // renderInvoiceHistory(); // Called by checkAuth -> setActiveNav
});
