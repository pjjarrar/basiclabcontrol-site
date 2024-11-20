const svgObject = document.getElementById("us-map");

svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const statePaths = svgDoc.querySelectorAll('path');
    let highlightedState = null;



    // Function to handle click events on the state paths
    function stateClickHandler(event) {
        const stateID = event.target.id;
        const statePath = event.target;
        const stateName = statePath.getAttribute("title");

        const linkUrl = "http://www.hotwatersolutions.com"
        const linkText = "www.hotwatersolutions.com"
        const linkString = `<a href="${linkUrl}" target="_blank">${linkText}</a>`
        const albertSterlingWebsite = '<a href="https://albertsterling.com" target="_blank">albertsterling.com</a>';


        const representatives = {
            "US-TX" : {name: "Hot Water Solutions", name2: "Albert Sterling", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", phone2: "(713) 780-1600", website: linkString, website2: albertSterlingWebsite, state: stateName, city1: "Dallas", city2:"Houston"},
            "US-CA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-AK" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-AL" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-AR" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-AZ" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-CO" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-CT" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-DC" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-DE" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-FL" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-GA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-HI" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-IA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-ID" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-IL" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-IN" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-KS" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-KY" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-LA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MD" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-ME" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MI" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MN" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MO" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MS" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-MT" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NC" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-ND" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NE" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NH" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NJ" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NM" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NV" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-NY" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-OH" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-OK" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-OR" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-PA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-RI" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-SC" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-SD" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-TN" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-WV" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-UT" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-VA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-VT" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-WA" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-WI" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
            "US-WY" : {name: "Hot Water Solutions", email: "sam@hotwatersolutions.com", phone: "(281)-744-6445", website: linkString, state: stateName},
        }

// Check if the stateID exists in the representatives data
if (representatives[stateID]) {
    const repInfo = representatives[stateID];
    document.getElementById("state-name").textContent = `${repInfo.state}`;
    document.getElementById("rep-name").textContent = `Name: ${repInfo.name}`;
    document.getElementById("rep-email").textContent = `Email: ${repInfo.email}`;
    document.getElementById("rep-phone").textContent = `Phone: ${repInfo.phone}`;
    document.getElementById("rep-website").innerHTML = `Website: ${repInfo.website}`;
    document.getElementById("rep-city").textContent =  `City: ${repInfo.city1}`;

    // Check if name2 exists (for the second representative)
    if (repInfo.name2) {
        document.getElementById("rep-name2").textContent = `Name: ${repInfo.name2}`;
        document.getElementById("rep-phone2").textContent = `Phone: ${repInfo.phone2}`;
        document.getElementById("rep-website2").innerHTML = `Website: ${repInfo.website2}`;
        document.getElementById("rep-city2").textContent =  `City: ${repInfo.city2}`;
    } else {
        // Hide the second representative's information if it doesn't exist
        document.getElementById("rep-name2").textContent = "";
        document.getElementById("rep-phone2").textContent = "";
        document.getElementById("rep-website2").textContent = "";
        document.getElementById("rep-city2").textContent =  "";
    }

    // You can update other information elements as well
} else {
    // Handle the case where no representative information is available for the state
    document.getElementById("state-name").textContent = "State Representative Map";
    document.getElementById("rep-name").textContent = "State Representative Information Not Available";
    document.getElementById("rep-email").textContent = "";
    document.getElementById("rep-phone").textContent = "";
    document.getElementById("rep-website").textContent = "";
    document.getElementById("rep-city").textContent =  "";
    document.getElementById("rep-name2").textContent = "";
    document.getElementById("rep-phone2").textContent = "";
    document.getElementById("rep-website2").textContent = "";
    document.getElementById("rep-city2").textContent =  "";

    // Clear other information elements if needed
}


        //highlighting the states
        console.log(`Clicked on state: ${stateID}`);
        // Remove highlighting from the previously highlighted state
        if (highlightedState) {
            highlightedState.setAttribute('class', '');
        }
        
        if (highlightedState !== statePath) {
            // Highlight the clicked state
            statePath.setAttribute('class', 'highlighted');
            highlightedState = statePath;
        } else {
            // Clicking the same state again removes the highlight
            highlightedState = null;
        }
    }

    // Attach the click event listener to each state path
    statePaths.forEach(path => {
        path.addEventListener('click', stateClickHandler);
    });
});
