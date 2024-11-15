//Banner Handling
braze.requestBannersRefresh(["akiplace"])

// get this placement's banner. If it's `null` the user did not qualify for one.
const globalBanner = braze.getBanner("akiplace");

// choose where in the DOM you want to insert the banner HTML
const container = document.getElementById("aki-hero");

// Insert the banner which replacees the innerHTML of that container
braze.insertBanner(globalBanner, container);

// Special handling if the user is part of a Control Variant
if (globalBanner.isControl) {
    // hide or collapse the container
    container.style.display = 'none';
}