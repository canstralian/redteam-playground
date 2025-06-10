// Terminal functionality
const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('command-input');
const executeBtn = document.getElementById('execute-btn');

// Connection modal elements
const connectBtn = document.getElementById('connect-btn');
const connectionModal = document.getElementById('connection-modal');
const cancelConnect = document.getElementById('cancel-connect');
const confirmConnect = document.getElementById('confirm-connect');
const connectionStatus = document.getElementById('connection-status');

// Target items
const targetItems = document.querySelectorAll('.target-item');

// Scenarios
const scenarioItems = document.querySelectorAll('.scenario-item');

// Flags
const flags = document.querySelectorAll('.flag');

// Console commands
const commands = {
    'help': () => printToTerminal('<br>Available commands:<br>- scan [target]<br>- exploit [vulnerability]<br>- connect [target]<br>- clear'),
    'scan': (target) => printToTerminal(`<br>Scanning ${target || 'network'}...<br>`),
    'exploit': (vuln) => printToTerminal(`<br>Attempting to exploit ${vuln || 'vulnerability'}...<br>`),
    'clear': () => terminal.innerHTML = '<div class="mb-1"><span class="text-green-400">root@kali></span><span class="blink">█</span></div>'
};

function printToTerminal(text) {
    const currentPrompt = terminal.lastElementChild;
    const newLine = document.createElement('div');
    // Using textContent for the input text to prevent XSS, if 'text' comes from user input
    // If 'text' is expected to contain HTML formatting, a robust sanitization library should be used.
    const tempDiv = document.createElement('div');
    tempDiv.textContent = text;
    newLine.innerHTML = currentPrompt.innerHTML + tempDiv.innerHTML;

    terminal.appendChild(newLine);

    // Add new prompt
    const newPrompt = document.createElement('div');
    newPrompt.className = 'mb-1';
    newPrompt.innerHTML = '<span class="text-green-400">root@kali></span><span class="blink">█</span>';
    terminal.appendChild(newPrompt);

    terminal.scrollTop = terminal.scrollHeight;
}

// Execute command
function executeCommand() {
    const command = commandInput.value.trim();
    if (!command) return;

    const parts = command.split(' ');
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    if (commands[cmd]) {
        commands[cmd](arg);
    } else {
        printToTerminal(`<br>Command not found: ${cmd}<br>Type 'help' for available commands.<br>`);
    }

    commandInput.value = '';
}

// Event listeners
executeBtn.addEventListener('click', executeCommand);
commandInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        executeCommand();
    }
});

// Connection modal
connectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    connectionModal.classList.remove('hidden');
});

cancelConnect.addEventListener('click', () => {
    connectionModal.classList.add('hidden');
});

confirmConnect.addEventListener('click', () => {
    connectionModal.classList.add('hidden');
    connectionStatus.className = 'h-3 w-3 rounded-full bg-green-500';
    connectionStatus.nextElementSibling.textContent = 'Connected';
});

// Target items click
targetItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all targets
        targetItems.forEach(i => i.classList.remove('border-blue-500'));
        // Add active class to clicked target
        item.classList.add('border-blue-500');

        const targetName = item.querySelector('h3').textContent;
        printToTerminal(`<br>Target selected: ${targetName}<br>`);
    });
});

// Scenario buttons
scenarioItems.forEach(scenario => {
    const button = scenario.querySelector('button');
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const scenarioName = scenario.querySelector('h3').textContent;
        printToTerminal(`<br>Starting scenario: ${scenarioName}<br>`);
    });
});

// Initial help message
setTimeout(() => {
    printToTerminal('<br>Welcome to Red Team Playground. Type \'help\' for available commands.<br>');
}, 500);
