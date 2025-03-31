document.addEventListener("DOMContentLoaded", function () {
    // Animate balance count-up
    let balanceDisplay = document.getElementById("animatedBalance");
    let currentBalance = 0;
    let targetBalance = 5280;  // Mocked balance amount

    let balanceInterval = setInterval(() => {
        if (currentBalance < targetBalance) {
            currentBalance += 100;
            balanceDisplay.innerText = currentBalance;
        } else {
            clearInterval(balanceInterval);
        }
    }, 50);

    // Set fixed balance for button display
    document.getElementById("balance").innerText = targetBalance;

    // Dynamic AI Insights
    const aiTips = [
        "💡 Move P500 to savings to meet your goal.",
        "💡 You spent 15% more on transport this month!",
        "💡 Dining expenses are higher than last month."
    ];
    document.getElementById("ai-tip").innerText = aiTips[Math.floor(Math.random() * aiTips.length)];

    // Chart.js - Spending Breakdown
    let ctx = document.getElementById("spendingChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Food", "Transport", "Entertainment", "Savings"],
            datasets: [{
                data: [1000, 800, 1200, 2000],
                backgroundColor: ["#870a3c", "#003366", "#00A4E8", "#ff0000"]
            }]
        }
    });
});
