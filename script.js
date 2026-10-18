// Stagger the bobbing hero tiles.
document.querySelectorAll('.portraits .tile').forEach((tile, i) => {
  tile.style.setProperty('--i', i);
});

// Hairline under the nav once the page scrolls.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- SIP calculator ----------
const inr = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });

// Rupees the Indian way: full figure under a lakh, then L / Cr.
function rupees(n) {
  if (n >= 1e7) return '₹' + (n / 1e7).toFixed(2) + ' Cr';
  if (n >= 1e5) return '₹' + (n / 1e5).toFixed(2) + ' L';
  return '₹' + inr.format(n);
}

const $ = (id) => document.getElementById(id);
const amt = $('amt'), rate = $('rate'), yrs = $('yrs');

function fill(input) {
  const p = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.setProperty('--p', p + '%');
}

function calc() {
  const P = Number(amt.value);
  const r = Number(rate.value) / 12 / 100;
  const n = Number(yrs.value) * 12;

  // Future value of a monthly SIP, contributions at the start of each month.
  const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = P * n;
  const gain = total - invested;

  $('o-amt').textContent = '₹' + inr.format(P);
  $('o-rate').textContent = rate.value + '%';
  $('o-yrs').textContent = yrs.value + (yrs.value === '1' ? ' yr' : ' yrs');

  $('r-total').textContent = rupees(total);
  $('r-inv').textContent = rupees(invested);
  $('r-gain').textContent = rupees(gain);
  $('bar-inv').style.width = (invested / total) * 100 + '%';

  [amt, rate, yrs].forEach(fill);
}

[amt, rate, yrs].forEach((el) => el.addEventListener('input', calc));
calc();
