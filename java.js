<script>
  const searchInput = document.getElementById("searchInput");
  const exercises = document.querySelectorAll(".exercise");

  searchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    exercises.forEach(function (exercise) {
      const text = exercise.textContent.toLowerCase();
      exercise.style.display = text.includes(filter) ? "block" : "none";
    });
  });
</script>