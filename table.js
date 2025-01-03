        // Fungsi untuk memformat angka ke format Rupiah
        function formatToRupiah(value) {
            const number = parseFloat(value);
            if (isNaN(number)) return "Rp.0,00";
            return "Rp." + number.toLocaleString("id-ID", { minimumFractionDigits: 2 });
        }

        // Terapkan format Rupiah ke kolom harga di tabel
        function formatTableRupiah(tableId, colIndexes) {
            document.querySelectorAll(`#${tableId} tbody tr`).forEach(row => {
                colIndexes.forEach(colIndex => {
                    const cell = row.cells[colIndex];
                    const value = cell.textContent.trim();
                    if (value) {
                        cell.textContent = formatToRupiah(value);
                        cell.classList.add("money");
                    }
                });
            });
        }

        // Format harga di tabel kue dan plastik
        formatTableRupiah("tableKue", [4, 5, 6]);
        formatTableRupiah("tablePlastik", [4, 5, 6]);

        // Warna merah untuk sel kosong
        document.querySelectorAll('td').forEach(cell => {
            if (!cell.textContent.trim()) {
                cell.style.backgroundColor = 'red';
            }
        });